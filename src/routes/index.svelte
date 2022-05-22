<script>
  // Access to database done through hitting endpoints
  // in order to protect access to Firestore and keep it server side only
  export async function load() {
    const response = await fetch("/gifts", {});
    return await response.json();
  }

  async function claimGift(gift) {
    await fetch("/gifts", {
      method: "post",
      headers: {
      'Content-Type': 'application/json'
      },
      body: JSON.stringify(gift),
    })
  }

  let giftsPromise = load();
</script>

<h1>Denis' Gift List</h1>
<p>Please leave a tick on the gift(s) you wish to give</p>
<p>If you have not yet found your gifts, here are some suggestions ;)</p>
<p>Don't hesitate to pick one, or two, or three or more...</p>
{#await giftsPromise}
  <p>Loading Gifts...</p>
{:then gifts}
  <ul>
    {#each gifts as gift}
      <li>
        <form action="">
          <label class="form-control">
            <input type="checkbox" name="checkbox" checked={gift.claimed} on:click={() => claimGift(gift)}/>
            <a href={gift.link} target="_blank">{gift.name}</a>
          </label>
        </form>
      </li>
    {/each}
  </ul>
{/await}

<style>

  h1 {
    margin-bottom: 20px;
    font-size: 2rem;
    font-weight: bold;
  }

  ul {
    padding: 1rem;
    columns: 3;
  }

  .form-control {
  font-family: system-ui, sans-serif;
  font-size: 1rem;
  font-weight: bold;
  line-height: 1.1;
  display: grid;
  grid-template-columns: 1em auto;
  gap: 0.5em;
}
  @media only screen and (max-width: 600px) {
  h1 {
    font-size: 1rem;
  }
  ul {
    columns: 1;
  }
  p {
    font-size: 0.75rem;
  }
  .form-control {
    font-size: 0.75rem;
  }
}
  li {
    display: flex;
    padding: 0.5rem;
  }
  a {
    color: rgb(44, 55, 66);
    text-decoration: none;

  }

  /* Customize the label (the container) */
  :root {
  --form-control-color: rgb(209, 161, 138);
  --form-control-disabled: #959495;
}

*,
*:before,
*:after {
  box-sizing: border-box;
}

form {
  display: grid;
  place-content: center;
}

input[type="checkbox"] {
  /* Add if not using autoprefixer */
  -webkit-appearance: none;
  /* Remove most all native input styles */
  appearance: none;
  /* For iOS < 15 */
  background-color: var(--form-background);
  /* Not removed via appearance */
  margin: 0;

  font: inherit;
  color: currentColor;
  width: 1.15em;
  height: 1.15em;
  border: 0.15em solid currentColor;
  border-radius: 0.15em;
  transform: translateY(-0.075em);

  display: grid;
  place-content: center;
}

input[type="checkbox"]::before {
  content: "";
  width: 0.65em;
  height: 0.65em;
  clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
  transform: scale(0);
  transform-origin: bottom left;
  transition: 120ms transform ease-in-out;
  box-shadow: inset 1em 1em var(--form-control-color);
  /* Windows High Contrast Mode */
  background-color: CanvasText;
}

input[type="checkbox"]:checked::before {
  transform: scale(1);
}

input[type="checkbox"]:focus {
  outline: max(2px, 0.15em) solid currentColor;
  outline-offset: max(2px, 0.15em);
}

input[type="checkbox"]:disabled {
  --form-control-color: var(--form-control-disabled);

  color: var(--form-control-disabled);
  cursor: not-allowed;
}
</style>

