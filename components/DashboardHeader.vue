<template>
  <header class="bg-white shadows text-black p-4">
    <div class="container mx-auto flex justify-between items-center">
      <UIcon name="i-heroicons-bars-3"/>
      <nav class="flex items-center gap-5">
       <UIcon name="i-heroicons-magnifying-glass" class="text-xl"/>
       <UChip :text="3" size="xl" color="red">
        <UIcon name="i-heroicons-bell" class="text-xl"/>
  </UChip>
        <UChip :text="3" size="xl" color="red">
          <UIcon name="i-heroicons-chat-bubble-bottom-center" class="text-xl"/>
        </UChip>
        <div class="flex items-center gap-2">
          <UAvatar
    size="sm"
    src="https://avatars.githubusercontent.com/u/739984?v=4"
    alt="Avatar"
  />
  <div>
    <b>Karambizi Etienne</b>
    <h2>Credit Manager</h2>
  </div>
 
        </div>
      </nav>
    </div>
  </header>
</template>
