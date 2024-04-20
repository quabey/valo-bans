<script>
  import {
    team1,
    team2,
    headsTeam,
    tailsTeam,
    pickingTeam,
    startBans,
    pickingStartTeam,
  } from "./store";

  let tails = "./images/tails.png";
  let heads = "./images/heads.png";

  let randomNum = undefined;

  function flipCoin() {
    randomNum = Math.random();
    if (randomNum < 0.5) {
      $pickingTeam = $headsTeam;
      $pickingStartTeam = $headsTeam;
    } else {
      $pickingTeam = $tailsTeam;
      $pickingStartTeam = $tailsTeam;
    }
  }

  function startGame() {
    $headsTeam = "";
    $tailsTeam = "";
    randomNum = null;
    $startBans = true;
  }
</script>

<main>
  <div
    class="absolute top-0 left-0 flex justify-center place-items-center w-screen h-screen"
  >
    <div class="h-[27rem] w-[40rem] bg-[#FF2A4B] text-black p-8 rounded-xl">
      <span class="text-2xl font-extrabold">
        Heads: {$headsTeam} - Tails: {$tailsTeam}</span
      >
      <div>
        <div class="coinFlipAnimation">
          {#if randomNum < 0.5}
            <img src={heads} alt="the words heads on a grey coin" />
          {/if}
          {#if randomNum >= 0.5}
            <img src={tails} alt="the words tails on a grey coin" />
          {/if}
        </div>
        <div class="">
          {#if !randomNum}
            <div class="text-valo">
              <button on:click={flipCoin}>Flip coin!</button>
            </div>
          {:else}
            <span class="text-2xl font-extrabold p-2"
              >{$pickingTeam} picks first!</span
            >
            <div class="text-valo">
              <button on:click={startGame}>Start game!</button>
            </div>
          {/if}
        </div>
      </div>
    </div>
  </div>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  img {
    height: 240px;
    width: 240px;
    margin-bottom: 1rem;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }

  .coinFlipAnimation {
    animation: coinFlip 0.5s 4;
  }

  @keyframes coinFlip {
    0%,
    100% {
      transform: rotateY(0deg);
      filter: blur(26px);
    }
    25%,
    75% {
      transform: rotateY(180deg);
      filter: blur(28px);
    }
    50% {
      transform: rotateY(360deg);
      filter: blur(26px);
    }
  }
</style>
