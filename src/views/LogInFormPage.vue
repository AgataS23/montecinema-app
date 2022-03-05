<template>
  <div>
    <h1>Hi there! Care to log in?</h1>
    <router-link :to="{ name: 'Register' }"> link to registration </router-link>
    <router-link :to="{ name: 'Home' }"> Home </router-link>
  </div>
</template>
