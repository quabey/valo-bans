<script>
  import { picksAndBans } from "./store";
</script>

<div class="flex flex-row items-center justify-center">
  {#each $picksAndBans as ban}
    <div class="p-2">
      {#if ban.type === "ban"}
        <div class="bg-valo p-2 rounded-2xl w-[12rem]">
          <span class="text-sm">{ban.team} bans {ban.name}</span>
          <img
            src={ban.link}
            alt=""
            class="rounded-2xl bg-[#e4eded] border-2 border-white"
          />
        </div>
      {/if}
      {#if ban.type === "pick"}
        <div class="bg-blue-600 p-2 rounded-2xl w-[12rem]">
          <span class="text-sm pb-2 font-extrabold"
            >{ban.team} picks {ban.name}</span
          >
          <img
            src={ban.link}
            alt=""
            class="rounded-2xl bg-[#e4eded] w-[30rem] border-2 border-white"
          />
        </div>
      {/if}
      {#if ban.type == ""}
        <div class="bg-gray-600 p-2 rounded-2xl w-[12rem] h-[9rem]">
          <span class=" pb-2"></span>
          <div class="">
            <img src={ban.link} alt="" class="rounded-2xl bg-[#e4eded]" />
          </div>
        </div>
      {/if}
    </div>
  {/each}
</div>
