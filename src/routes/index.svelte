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
        <label class="container"><a href={gift.link} target="_blank">{gift.name}</a>
          <input type="checkbox" checked={gift.claimed}>
          <span class="checkmark" on:click={() => claimGift(gift)}></span>
        </label>
      </li>
    {/each}
  </ul>
{/await}

<style>

  h1 {
    margin: 20px;
    font-size: 2rem;
    font-weight: bold;
  }

  @media only screen and (max-width: 600px) {
  h1 {
    font-size: 1rem;
  }
}
  li {
    display: flex;
    margin: 10px;
  }
  a {
    color: rgb(44, 55, 66);
    text-decoration: none;

  }

  /* Customize the label (the container) */
.container {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 1rem;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default checkbox */
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: rgb(223, 194, 181);
}

/* On mouse-over, add a grey background color */
.checkmark:hover {
  background-color: #ccc;
}

/* When the checkbox is checked, add a blue background */
.container input:checked ~ .checkmark {
  background-color: rgb(44, 55, 66);
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.container .checkmark:after {
  left: 9px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
</style>

