tinymce.init({
    selector: 'textarea#text-editor',
    plugins: 'lists link image table code help wordcount',
    setup: (editor) => {
      editor.on('clik', () => {
        document.querySelector('#preview').innerHTML = editor.getContent();
      });
      editor.on("keyup", () => {
        document.querySelector("#preview").innerHTML = editor.getContent();
      })
    }
  });