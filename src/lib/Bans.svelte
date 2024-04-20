<script>
  import {
    team1,
    team2,
    pickingTeam,
    bo3,
    mapPool,
    winningMap,
    startBans,
    startWinningMap,
    picksAndBans,
    currentPickingIndex,
  } from "./store";

  function banMap(index) {
    if ($bo3) {
      bo3Ban(index);
      return;
    }
    if ($picksAndBans.length < 7) {
      $pickingTeam = $pickingTeam === $team1 ? $team2 : $team1;
      $picksAndBans[$currentPickingIndex - 1] = {
        name: $mapPool[index].name,
        link: $mapPool[index].link,
        team: $pickingTeam,
        type: "ban",
      };
      $currentPickingIndex++;
    }

    if ($currentPickingIndex === 7) {
      $winningMap = $mapPool.find(
        (map) => !$picksAndBans.find((ban) => ban.name === map.name)
      );
      console.log("winning map", $winningMap);
      $startBans = false;
      $startWinningMap = true;
      $pickingTeam = $pickingTeam === $team1 ? $team2 : $team1;
    }
  }

  function bo3Ban(index) {
    // TODO: Implement bo3 ban logic
  }
</script>

<div class="">
  <div class="text-2xl m-4 font-extrabold">Picking team: {$pickingTeam}</div>
  <div class="grid grid-cols-4 gap-3 w-full">
    {#each $mapPool as map, index}
      <div class="p-2">
        <button
          class="bg-valo p-2 rounded-2xl w-full"
          class:opacity-40={$picksAndBans.find((ban) => ban.name === map.name)}
          disabled={!!$picksAndBans.find((ban) => ban.name === map.name)}
          on:click={() => banMap(index)}
        >
          <span class="text-xl pb-2 font-extrabold">{map.name}</span>
          <div class="">
            <img
              src={map.link}
              alt=""
              class="rounded-2xl bg-[#e4eded] w-[30rem]"
            />
          </div>
        </button>
      </div>
    {/each}
  </div>
</div>
