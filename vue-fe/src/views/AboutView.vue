<template>
  <div class="about">
    <h1>Quill Editor</h1>
    <div class="content">
      <div class="editor">
        <QuillEditor
          @textChange="testChange"
          ref="myEditor"
          :modules="modules"
          toolbar="full"
          theme="snow"
          v-model:content="content"
        />
      </div>
      <div
        v-html="viewContent"
        class="markdown-render"
        @click="handleClick"
      ></div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, watch } from 'vue';
import { QuillEditor, Delta } from '@vueup/vue-quill';
import BlotFormatter from 'quill-blot-formatter';
// @ts-ignore
import MarkDownShortcuts from 'quill-markdown-shortcuts';

export default defineComponent({
  components: {
    QuillEditor,
  },

  setup: () => {
    const content = ref<any>('');

    const viewContent = ref<any>('');
    const modules = [
      {
        name: 'blotFormatter',
        module: BlotFormatter,
        options: {
          /* options */
        },
      },
      {
        name: 'MarkDownShortcuts',
        module: MarkDownShortcuts,
      },
    ];

    return {
      content,
      modules,
      viewContent,
    };
  },
  methods: {
    handleClick() {
      console.log('click');
      console.log(console.log(this.$refs.myEditor.getEditor()));
    },
    testChange() {
      this.viewContent = this.$refs.myEditor.getHTML();
      const image = document.querySelector('.markdown-render');

      console.log(this.viewContent);
    },
  },
});
</script>

<style lang="less">
.content {
  width: 100%;
  display: flex;
  flex-flow: row;
  height: 70vh;
  flex-shrink: 0;

  .editor {
    height: 70vh;
    flex: 1;
  }

  .markdown-render {
    flex: 1;
    height: 70vh;
    border: 1px solid #ccc;
  }
}
</style>
