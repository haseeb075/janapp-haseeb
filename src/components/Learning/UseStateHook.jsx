import React, { useState } from "react";
// import { saveAs } from 'file-saver';
// import { FileSaver} from 'file-saver'
import JSZip from "jszip";

function UseStateHook(props) {
  const [count, setCount] = useState(0);
  // var JSZip = require("jszip");

  const downloadZip = (event) => {
    var zip = new JSZip();
    var FileSaver = require("file-saver");

    zip.generateAsync({ type: "Blob" }).then(function () {
      var file = new File(["Pdf File downloaded !!!"], "new.pdf", {
        type: "Blobtext/plain;charset=utf-8",
      });
      FileSaver.saveAs(file);
    });
  };

  return (
    <div>
      <button type="button" onClick={() => setCount(count + 1)}>
        add {count}
      </button>

      <button type="button" onClick={downloadZip}>
        Download Zip file
      </button>
    </div>
  );
}

export default UseStateHook;
