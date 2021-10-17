import "./ImageUpload.css";
import { app } from "../fb";
import React from "react";

export const ImageUpload = () => {
  const [archivoUrl, setArchivoUrl] = React.useState("");
  const [docus, setDocus] = React.useState([]);

  const archivoHandler = async (e) => {
    const archivo = e.target.files[0];
    const storageRef = app.storage().ref();
    const archivoPath = storageRef.child(archivo.name);
    await archivoPath.put(archivo);
    console.log("archivo cargado:", archivo.name);
    const enlaceUrl = await archivoPath.getDownloadURL();
    setArchivoUrl(enlaceUrl);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const nombreArchivo = e.target.nombre.value;
    if (!nombreArchivo) {
      alert("coloca un nombre");
      return;
    }
    const coleccionRef = app.firestore().collection("archivos");
    const docu = await coleccionRef
      .doc(nombreArchivo)
      .set({ nombre: nombreArchivo, url: archivoUrl });
    console.log("archivo cargado:", nombreArchivo, "ulr:", archivoUrl);
    window.location = "/";
  };

  React.useEffect(async () => {
    const docusList = await app.firestore().collection("archivos").get();
    setDocus(docusList.docs.map((doc) => doc.data()));
  }, []);

  return (
    <>
      <form onSubmit={submitHandler}>
          <div className="container mt-5">
          <input className="form-control mb-3" type="file" onChange={archivoHandler} />
        <input className="form-control" type="text" name="nombre" placeholder="Ponle un titulo a tu meme" />
        <button className="btn btn-warning btn-lg mt-3">PUBLICAR MEME</button>
          </div>         
      </form>
    </>
  );
};
