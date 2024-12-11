<template>
    <div class="">
        <div>
            <textarea v-model="value_contents" :id="id_key"></textarea>
        </div>
    </div>
</template>

<script>
import SUNEDITOR from 'suneditor'
import plugins from 'suneditor/src/plugins'

export default {
    props: {
        app: {
            type: Number,
            default: 9999,
        },
        contents: {
            type: String,
            default: 'Nhập nội dung',
        },
    },
    data: () => ({
        suneditorInstance: null,
        value_contents: '',
    }),
    computed: {
        id_key() {
            return 'key-' + this.app
        },
    },
    mounted() {

        const editor = SUNEDITOR.create((document.getElementById(this.id_key) || this.id_key), {
            toolbarContainer: '#toolbar_container',
            showPathLabel: false,
            charCounter: true,
            width: 'auto',
            height: 'auto',
            minHeight: '100px',
            maxHeight: '250px',
            plugins: plugins,
            buttonList: [
                ['undo', 'redo', 'font', 'fontSize', 'formatBlock'],
                ['bold', 'underline', 'italic', 'strike', 'subscript', 'superscript', 'removeFormat'],
                ['fontColor', 'hiliteColor', 'outdent', 'indent', 'align', 'horizontalRule', 'list', 'table'],
                ['link', 'image', 'video', 'fullScreen', 'showBlocks', 'codeView', 'preview', 'print', 'save']
            ],
            callBackSave: function (contents, isChanged) {
                this.contents = contents
                console.log(contents);
            },
        });
        this.suneditorInstance = editor; // Store the Suneditor instance in a component property

        this.suneditorInstance.onChange = async (contents, core) => {
            this.value_contents = contents;
            this.$emit('valueChanged', contents);
            await console.log(this.value_contents)
        };

        this.suneditorInstance.setContents(this.contents);
    },
};
</script>
