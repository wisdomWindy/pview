<template>
  <div class="container">
    <PButton type="primary">primary</PButton>
    <PButton type="success">success</PButton>
    <PButton type="info">info</PButton>
    <PButton type="warning">warning</PButton>
    <PButton type="danger">danger</PButton>
    <PButton type="info" :round="true">round</PButton>
    <PButton type="info" :disabled="true">disabled</PButton>
    <PButton type="info" :plain="true">plain</PButton>
    <PButtonGroup>
      <PButton type="info" round :disabled="true">disabled</PButton>
      <PButton type="info" round :plain="true">plain</PButton>
    </PButtonGroup>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
