<script lang='ts' setup></script>

<template>
  <ul class="menu bg-base-200 rounded-box h-full w-56">
    <li><a>Item 1</a></li>
    <li>
      <details open>
        <summary>Parent</summary>
        <ul>
          <li><a>Submenu 1</a></li>
          <li><a>Submenu 2</a></li>
          <li>
            <details open>
              <summary>Parent</summary>
              <ul>
                <li><a>Submenu 1</a></li>
                <li><a>Submenu 2</a></li>
              </ul>
            </details>
          </li>
        </ul>
      </details>
    </li>
    <li><a>Item 3</a></li>
  </ul>
</template>

<style scoped></style>
