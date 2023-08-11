import { useState } from "react";

export const Formulario = () => {
  const [nombreMascota, setNombreMascota] = useState("");
  const [nombrePropietario, setNombrePropietario] = useState("");
  const [emailPropietario, setEmailPropietario] = useState("");
  const [altaMascota, setAltaMascota] = useState("");
  const [sintomasMascota, setSintomasMascota] = useState("");

  const dataPaciente = {
    nombreMascota,
    nombrePropietario,
    emailPropietario,
    altaMascota,
    sintomasMascota,
  };

  console.log(dataPaciente);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(nombreMascota);

    setNombreMascota('')
    setNombrePropietario('')
    setEmailPropietario('')
    setAltaMascota('')
    setSintomasMascota('')

  };

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      {/* Titulo de la seccion del formulario*/}
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      {/* descripcion de la seccion formulario*/}
      <p className="text-lg mt-5 text-center mb-10">
        Añade Pacientes y {""}
        <span className="text-indigo-600 font-bold ">Administralos</span>
      </p>
      {/* formulario */}
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
      >
        <div className="mb-5">
          <label
            htmlFor="mascota"
            className="block text-gray-700 uppercase font-bold"
          >
            NOMBRE MASCOTA
          </label>
          <input
            id="mascota"
            type="text"
            placeholder="Nombre de la Mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={nombreMascota}
            onChange={(e) => setNombreMascota(e.target.value)}
          />
          <label
            htmlFor="propietario"
            className="block text-gray-700 uppercase font-bold"
          >
            NOMBRE PROPIETARIO
          </label>
          <input
            id="propietario"
            type="text"
            placeholder="Nombre del propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={nombrePropietario}
            onChange={(e) => setNombrePropietario(e.target.value)}
          />
          <label
            htmlFor="email"
            className="block text-gray-700 uppercase font-bold"
          >
            EMAIL
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email contacto propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={emailPropietario}
            onChange={(e) => setEmailPropietario(e.target.value)}
          />
          <label
            htmlFor="mascota"
            className="block text-gray-700 uppercase font-bold"
          >
            ALTA
          </label>
          <input
            id="alta"
            type="date"
            placeholder="Nombre de la Mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={altaMascota}
            onChange={(e) => setAltaMascota(e.target.value)}
          />
          <label
            htmlFor="mascota"
            className="block text-gray-700 uppercase font-bold"
          >
            SÍNTOMAS
          </label>
          <input
            id="sintomas"
            type="text"
            placeholder="Describe los sintomas"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={sintomasMascota}
            onChange={(e) => setSintomasMascota(e.target.value)}
          />
        </div>
        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
          value={"Agregar Paciente"}
        />
      </form>
    </div>
  );
};
