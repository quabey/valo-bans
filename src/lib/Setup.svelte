<script>
  import {
    team1,
    team2,
    headsTeam,
    tailsTeam,
    teamList,
    bo3,
    startModal,
  } from "./store";
  import Select from "svelte-select";

  let tempTeam1;
  let tempTeam2;
  let tempHeadsTeam;

  function start() {
    $team1 = tempTeam1?.value;
    $team2 = tempTeam2?.value;
    $headsTeam = tempTeam1?.value;
    $tailsTeam = tempTeam2?.value;
    console.log({ $team1, $team2, $headsTeam, $tailsTeam, $bo3 });
    $tailsTeam = $team1 === $headsTeam ? $team2 : $team1;
    console.table({ $team1, $team2, $headsTeam, $tailsTeam, $bo3 });
    $startModal = false;

    console.log("Team 1", $team1);
    console.log("Team 2", $team2);
    console.log(!!$team1 && !!$team2);
  }
</script>

<div
  class="absolute top-0 left-0 flex justify-center place-items-center w-screen h-screen"
>
  <div class="h-[27rem] w-[40rem] bg-[#FF2A4B] text-black p-8 rounded-xl">
    <span class="text-2xl font-extrabold">Pick the teams:</span>
    {#if $teamList.length}
      <div class="p-2">
        <Select items={$teamList} bind:value={tempTeam1} />
      </div>
      <div class="p-2">
        <Select items={$teamList} bind:value={tempTeam2} />
      </div>
    {/if}
    <label class="relative flex justify-between items-center group p-2 text-xl">
      Best of 3
      <input
        bind:checked={$bo3}
        type="checkbox"
        class="absolute left-1/2 -translate-x-1/2 w-full h-full peer appearance-none rounded-md"
      />
      <span
        class="w-16 h-10 flex items-center flex-shrink-0 ml-4 p-1 bg-gray-300 rounded-full duration-300 ease-in-out peer-checked:bg-green-400 after:w-8 after:h-8 after:bg-white after:rounded-full after:shadow-md after:duration-300 peer-checked:after:translate-x-6 group-hover:after:translate-x-1"
      ></span>
    </label>
    <button
      class="bg-white"
      on:click={start}
      disabled={!(!!tempTeam1 && !!tempTeam2) ||
        tempTeam1.value == tempTeam2.value}
    >
      Start Match
    </button>
  </div>
</div>
