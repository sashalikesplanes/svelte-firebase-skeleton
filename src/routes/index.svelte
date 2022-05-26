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
<p>Don't hesitate to pick one, or two, or three or donate to charities listed below on my behalf.</p>
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
<p><a target="_blank" class="donate-link" href="https://rolda.org/breaking-news-ukraine/#donation-box">Help the dogs!</a></p>
<p><a target="_blank" class="donate-link" href="https://wck.org/">Feed the people!</a></p>
<p class="big">Address For Delivery:</p>
<p class="big">Denis Kiselev</p>
<p class="big">37, Avenue Commandante Bret</p>
<p class="big">06400, Cannes, France </p>
<p class="big">Tél: 06 50 56 81 16</p>
<p class="big">Please send all notifications to: <a href="mailto:dakiselev@gmail.com">dakiselev@gmail.com</a></p>
<style>

  .donate-link {
    color: rgb(209, 161, 138);
    font-weight: 800;
  }
  p {
    line-height: 1.25rem;
  }

  ul {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;
  }

  h1 {
    margin-bottom: 1.5rem;
    font-size: 2rem;
    font-weight: bold;
  }

  a {
    font-family: system-ui, sans-serif;
  font-size: 0.9rem;
  font-weight: 600;
  line-height: 1.1;
  }

  .form-control {
  display: grid;
  grid-template-columns: 1em auto;
  align-items: center;
  gap: 0.5em;
  width: 14rem;
  margin: 0.1rem;
}
  @media only screen and (max-width: 700px) {

  .form-control {
    width: 12rem;
  }
  h1 {
    font-size: 1rem;
  }
  ul {
    grid-template-columns: 1fr;
  }

  p {
    font-size: 0.75rem;
  }
  p.big {
    font-size: 0.8rem;
  }

  a {
    font-size: 0.75rem;
  }
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
  width: 0.75em;
  height: 0.75em;
  border: 0.15em solid currentColor;
  border-radius: 0.15em;

  display: grid;
  place-content: center;
}

input[type="checkbox"]::before {
  content: "";
  width: 0.4em;
  height: 0.4em;
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
  outline: max(2px, 0.1em) solid currentColor;
  outline-offset: max(2px, 0.1em);
}
</style>

