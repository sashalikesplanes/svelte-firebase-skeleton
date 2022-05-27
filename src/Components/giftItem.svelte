<script>
    export let giftClaimed;
    export let giftName
    export let giftId;
    export let giftLink;

    async function claimGift(gift) {
    await fetch("/gifts", {
      method: "post",
      headers: {
      'Content-Type': 'application/json'
      },
      body: JSON.stringify(gift),
    })

    
  }
  const forceUpdate = async (_) => {};
  let doRerender = 0;
</script>

{#await forceUpdate(doRerender) then _}
<li>
  <form action="">
    <label class="form-control">
      <input 
      type="checkbox" 
      name="checkbox" 
      bind:checked={giftClaimed} 
      on:click|preventDefault={() => {
        if (confirm(`${giftClaimed ? "Unclaim" : "Claim"} ${giftName}`)) {
        claimGift({claimed: giftClaimed, name: giftName, link: giftLink, id: giftId});
        giftClaimed = !giftClaimed
        doRerender++;
        }}}
      />
        <a href={giftLink} target="_blank">{giftName}</a>
    </label>
  </form>
</li>
{/await}
<style>
  
    :link, :visited {
      color: rgb(209, 161, 138);
      font-family: system-ui, sans-serif;
      font-size: 0.9rem;
      font-weight: 600;
      line-height: 1.1;
      text-decoration: underline;
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
      width: 12.5rem;
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