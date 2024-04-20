<script>
  import { team1, team2, pickingTeam, bo3, winningMap } from "./store";
</script>

<div class="bg-valo p-6 rounded-2xl">
  <div class="text-3xl m-4 font-extrabold">Winning Map: {$winningMap.name}</div>
  <div class="flex justify-center">
    <img
      src={$winningMap.link}
      alt=""
      class="rounded-2xl bg-[#e4eded] h-[30rem]"
    />
  </div>

  <span class="font-extrabold text-xl">
    Team {$pickingTeam} picks Attack / Defense
  </span>
</div>
