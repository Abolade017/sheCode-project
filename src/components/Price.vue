<template>
    <div class="flex flex-row md:flex-col justify-between md:items-start items-center md:space-y-2 pb-4">
        <div class="flex space-x-4 items-center">
            <h1 class="font-bold text-3xl text-black">$125.00</h1>
             <div class="text-yellow-600 bg-gray-200 text-center rounded-sm h-6 w-14 font-bold">50%</div>
        </div>
       <div class="items-center">
        <p class="text-gray-500 font-bold " id="previous-price">$250.00</p>
        </div>
    </div>
</template>
<style scoped>
#previous-price{
    text-decoration: line-through;
}
</style>