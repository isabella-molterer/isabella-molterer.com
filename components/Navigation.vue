<template>
    <nav class="navigation">
        <ul class="flex flex-nowrap justify-between">
            <li>   
                <label>Mode</label>   
                <select v-model="$colorMode.preference">
                    <option value="light">Light</option>
                    <option value="dark">Dark</option>
                </select>
            </li>
            <Socials/>	
        </ul>
    </nav>
</template>