import "./galery.css";
import { app } from "../fb";
import React from "react";

export const Galery = () => {
  const [archivoUrl, setArchivoUrl] = React.useState("");
  const [docus, setDocus] = React.useState([]);

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
      <div className="container mt-5 mb-5">
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {docus.map((doc) => (
            <div className="col">
              <div className="card">
                <div className="card-body">
                  <h3 className="h3 card-title">{doc.nombre}</h3>
                  <hr/>
                </div>
                <img src={doc.url} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
