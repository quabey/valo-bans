<script>
  import {
    team1,
    team2,
    pickingTeam,
    bo3,
    winningMap,
    picksAndBans,
    pickingStartTeam,
  } from "./store";
</script>

<div class="bg-gradient-to-br from-valo to-valo/70 p-6 rounded-2xl">
  <div class="text-3xl m-4 font-extrabold">
    {$bo3 ? "Decider" : "Winning"} Map: {$winningMap.name}
  </div>
  <div class="flex justify-center">
    {#if !$bo3}
      <div class="">
        <img
          src={$winningMap.link}
          alt=""
          class="rounded-2xl bg-[#e4eded] h-[30rem]"
        />
        <div class="pt-3">
          <span
            class="font-extrabold text-xl bg-white text-valo rounded-lg p-1"
          >
            Team {$pickingStartTeam === $team1 ? $team2 : $team1} picks
            <b>Attack / Defense</b>
          </span>
        </div>
      </div>
    {:else}
      <div class="flex flex-col">
        <div class="flex flex-col items-center p-2">
          <div class="flex justify-center">
            <img
              src={$winningMap.link}
              alt=""
              class="rounded-2xl bg-[#e4eded] h-[15rem] border-4 border-white"
            />
          </div>
          <span
            class="font-extrabold text-xl bg-white text-valo rounded-lg p-1 m-2"
          >
            Team {$pickingStartTeam} picks <b>Attack / Defense</b> on {$winningMap.name}
          </span>
        </div>
        <div class="flex flex-row justify-center gap-4">
          <div class="flex flex-col gap-1 items-center">
            <span>{$picksAndBans[3 - 1].team}</span>
            <div class="">
              <img
                src={$picksAndBans[3 - 1].link}
                alt=""
                class="rounded-2xl bg-[#e4eded] h-[8rem] border-4 border-white"
              />
            </div>
            <span class="bg-white text-valo rounded-lg font-bold p-1">
              {$picksAndBans[3 - 1].team == $team1 ? $team2 : $team1} picks
              <b>Attack / Defense</b>
              {$picksAndBans[3 - 1].name}
            </span>
          </div>
          <div class="flex flex-col gap-1 items-center">
            <span>{$picksAndBans[4 - 1].team}</span>
            <div class="">
              <img
                src={$picksAndBans[4 - 1].link}
                alt=""
                class="rounded-2xl bg-[#e4eded] h-[8rem] border-4 border-white"
              />
            </div>
            <span class="bg-white text-valo rounded-lg font-bold p-1">
              {$picksAndBans[4 - 1].team == $team1 ? $team2 : $team1} picks
              <b>Attack / Defense</b>
              {$picksAndBans[4 - 1].name}
            </span>
          </div>
        </div>
      </div>
    {/if}
  </div>
</div>
