<script>
  // Access to database done through hitting endpoints
  // in order to protect access to Firestore and keep it server side only
  import { onMount } from 'svelte';
  import GiftItem from '../Components/giftItem.svelte'


  let gifts = [];

  async function load() {
    const res = await fetch("/gifts", {});
    gifts = await res.json()
  }

  onMount(load)
</script>

<h1>Denis' Gift List</h1>
<p>Please leave a tick on the gift(s) you wish to give</p>
<p>If you have not yet found your gifts, here are some suggestions ;)</p>
<p>Don't hesitate to pick one, or two, or three or donate to charities listed below on my behalf.</p>
<ul>
  {#each gifts as gift}
    <GiftItem giftClaimed={gift.claimed} giftName={gift.name} giftId={gift.id} giftLink={gift.link} />
  {/each}
</ul>
<p><a target="_blank" class="donate-link" href="https://rolda.org/breaking-news-ukraine/#donation-box">Help the dogs!</a></p>
<p><a target="_blank" class="donate-link" href="https://wck.org/">Feed the people!</a></p>
<p class="big">Address For Delivery:</p>
<p class="big">Denis Kiselev</p>
<p class="big">37, Avenue Commandant Bret</p>
<p class="big">06400, Cannes, France </p>
<p class="big">Tél: 06 50 56 81 16</p>
<p class="big">Please send all notifications to: <a href="mailto:dakiselev@gmail.com">dakiselev@gmail.com</a></p>
<style>
  .donate-link {
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

  :link, :visited {
    color: rgb(209, 161, 138);
    font-family: system-ui, sans-serif;
    font-size: 0.9rem;
    font-weight: 600;
    line-height: 1.1;
    text-decoration: underline;
  }
  @media only screen and (max-width: 700px) {
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
</style>

