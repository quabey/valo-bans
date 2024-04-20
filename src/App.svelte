<script>
  import {
    bo3,
    headsTeam,
    pickingTeam,
    startModal,
    team1,
    team2,
    startBans,
    tailsTeam,
    startWinningMap,
    pickingStartTeam,
    picksAndBans,
    currentPickingIndex,
  } from "./lib/store";
  import Setup from "./lib/Setup.svelte";
  import Coin from "./lib/Coin.svelte";
  import Bans from "./lib/Bans.svelte";
  import WinningMap from "./lib/WinningMap.svelte";
  import BanList from "./lib/BanList.svelte";

  function reset() {
    $startModal = true;
    $team1 = "";
    $team2 = "";
    $headsTeam = "";
    $tailsTeam = "";
    $bo3 = false;
    resetBans();
    $pickingStartTeam = "";
    $pickingTeam = "";
    $bo3 = false;
    $startBans = false;
  }

  function resetBans() {
    $startBans = true;
    $startWinningMap = false;
    $picksAndBans = [
      { link: "", name: "", team: "", type: "" },
      { link: "", name: "", team: "", type: "" },
      { link: "", name: "", team: "", type: "" },
      { link: "", name: "", team: "", type: "" },
      { link: "", name: "", team: "", type: "" },
      { link: "", name: "", team: "", type: "" },
    ];
    $pickingTeam = $pickingStartTeam;
    $currentPickingIndex = 1;
  }

  function undo() {
    $picksAndBans[$currentPickingIndex - 2] = {
      link: "",
      name: "",
      team: "",
      type: "",
    };
    $currentPickingIndex--;
    $pickingTeam = $pickingTeam === $team1 ? $team2 : $team1;
    $startBans = true;
    $startWinningMap = false;
  }
</script>

{#if $headsTeam || $startBans}
  <div class="absolute top-0 left-0 flex justify-center w-screen logo-font">
    <div class="bg-valo p-2 rounded-b-2xl justify-center flex flex-col">
      <div class="text-5xl font-extrabold flex flex-row px-4 justify-center">
        <img
          src="/images/banner.png"
          alt=""
          class="bg-[#242424] rounded-lg p-1 h-24 pb-2"
        />
      </div>
      <div class="text-lg">
        <span class="text-2xl">{$team1}</span> vs
        <span class="text-2xl">{$team2}</span>
      </div>
    </div>
  </div>
{/if}

{#if $headsTeam}
  <Coin />
{/if}
<div class="absolute flex flex-col gap-2 top-0 right-0 p-2">
  <button on:click={reset}>Reset</button>
  <button on:click={resetBans}>Restart bans</button>
  <button on:click={undo} disabled={$currentPickingIndex == 1}>Undo</button>
</div>
{#if $startModal}
  <Setup />
{/if}
{#if $startBans}
  <Bans />
  <BanList />
{/if}
{#if $startWinningMap}
  <WinningMap />
  <BanList />
{/if}
<div class="absolute bottom-0 left-0 z-40 p-1">
  <span class="text-white">
    Made with ❤️ by <a href="https://github.com/quabey"> bey </a>
  </span>
</div>

<style>
</style>
