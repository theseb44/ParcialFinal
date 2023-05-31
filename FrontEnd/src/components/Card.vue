<template>
    <div class="flex justify-center items-center flex-col w-[15%] gap-2">
        <div class="bg-white rounded-full w-[125px] h-[125px] flex justify-center items-center ">
            <img :src="urlImg" alt="" class="scale-75">
        </div>
        <div>
            <p class="text-[18px] text-center">
                {{ texto }}
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CardComponent',
    props: {
        urlImg: {
            type: String,
            required: true
        },
        texto: {
            type: String,
            required: true
        }
    }
}
</script>