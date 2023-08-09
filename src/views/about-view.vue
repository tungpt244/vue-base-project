<template>
  <div class="about">
    <h1>{{ t('hello') }}</h1>
  </div>

  <form @submit.prevent="onSubmit">
    <custom-input v-model="value"></custom-input>
    <button type="submit">Submit</button>
  </form>

  <div>{{ value }}</div>
  <div>{{ errorMessage }}</div>

  {{ availableLocales }}

  <button @click="loadMessage('vi')">LANG VN</button>
  <button @click="loadMessage('en')">LANG EN</button>

  <br />
  <button @click="toggle">{{ isDarkMode }}</button>

  <teleport to="body">
    <div id="p-notification" class="fixed right-2 top-2 space-y-2"></div>
  </teleport>
</template>

<script setup lang="ts">
import { availableLocales, loadMessage } from '@/i18n'
import { useI18n } from 'vue-i18n'
import { definePage } from 'vue-router/auto'
import { useDarkMode } from '@/composables'
import { useField, useForm } from 'vee-validate'
import * as yup from 'yup'

const { t } = useI18n()
const { isDarkMode, toggle } = useDarkMode()

const validationSchema = yup.object({
  data: yup.string().required().min(6)
})

const { handleSubmit } = useForm({
  validationSchema,
  initialValues: { data: '' }
})

const { value, errorMessage } = useField<string>('data')

const onSubmit = handleSubmit(
  async () => {
    console.log(value.value)
  },
  () => {
    console.log('error')
  }
)

definePage({
  name: 'about',
  path: '/about',
  meta: {
    layout: 'custom'
  }
})
</script>
