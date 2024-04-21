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
      $picksAndBans[$currentPickingIndex - 1] = {
        name: $mapPool[index].name,
        link: $mapPool[index].link,
        team: $pickingTeam,
        type: "ban",
      };
      $pickingTeam = $pickingTeam === $team1 ? $team2 : $team1;
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
    console.log("Bo3 ban");
    if ($currentPickingIndex < 7) {
      const type = determineType($currentPickingIndex);
      $picksAndBans[$currentPickingIndex - 1] = {
        name: $mapPool[index].name,
        link: $mapPool[index].link,
        team: $pickingTeam,
        type: type,
      };
      $currentPickingIndex++;
      toggleTeam();
      console.log("Current picking index", $currentPickingIndex);
      console.table($picksAndBans);
    }

    if ($currentPickingIndex === 7) {
      $winningMap = $mapPool.find(
        (map) => !$picksAndBans.find((ban) => ban.name === map.name)
      );
      console.log("Winning map", $winningMap);
      $startBans = false;
      $startWinningMap = true;
      toggleTeam();
      console.table($picksAndBans);
    }
  }

  function determineType(index) {
    // Determine whether the current action is a 'ban' or a 'pick'
    if (index === 1 || index === 2 || index === 5 || index === 6) {
      return "ban";
    } else if (index === 3 || index === 4) {
      return "pick";
    }
  }

  function toggleTeam() {
    $pickingTeam = $pickingTeam === $team1 ? $team2 : $team1;
  }
</script>

<div class="">
  <div class="text-3xl m-4 font-extrabold pt-12 logo-font">
    {!$bo3 ||
    $currentPickingIndex === 1 ||
    $currentPickingIndex === 2 ||
    $currentPickingIndex === 5 ||
    $currentPickingIndex === 6
      ? "Banning"
      : "Picking"}
    team: {$pickingTeam}
  </div>
  <div class="grid grid-cols-4 gap-3 w-full">
    {#each $mapPool as map, index}
      <div class="p-2">
        <button
          class="bg-valo p-2 rounded-2xl w-full"
          class:opacity-40={$picksAndBans.some((ban) => ban.name === map.name)}
          disabled={!!$picksAndBans.some((ban) => ban.name === map.name)}
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
