import React from 'react';

function QuestionForm() {
    return (
        <form className="p-5 bg-white rounded shadow-md">
            <label className="block mb-2 text-gray-700">
                Qual seu login?
                <input className="w-full px-3 py-2 mt-1 text-gray-700 border rounded-md focus:outline-none focus:shadow-outline" type="text" name="login" />
            </label>
            <label className="block mb-2 text-gray-700">
                Voce é bolsista?
                <div className="mt-2">
                    <label className="inline-flex items-center">
                        <input className="form-radio text-indigo-600" type="radio" name="scholarship" value="yes" />
                        <span className="ml-2">Sim</span>
                    </label>
                    <label className="inline-flex items-center ml-6">
                        <input className="form-radio text-indigo-600" type="radio" name="scholarship" value="no_never_tried" />
                        <span className="ml-2">Não, nunca tentei</span>
                    </label>
                    <label className="inline-flex items-center ml-6">
                        <input className="form-radio text-indigo-600" type="radio" name="scholarship" value="no_but_tried" />
                        <span className="ml-2">Não, mas já tentei</span>
                    </label>
                </div>
            </label>
			<label className="block mb-2 text-gray-700">
                Em qual bairro você mora?
                <input className="w-full px-3 py-2 mt-1 text-gray-700 border rounded-md focus:outline-none focus:shadow-outline" type="text" name="login" />
            </label>
			<label className="block mb-2 text-gray-700">
                Conte um pouco do contexto da sua casa?
                <div className="mt-2">
                    <label className="inline-flex items-center">
                        <input className="form-radio text-indigo-600" type="radio" name="scholarship" value="yes" />
                        <span className="ml-2">Moro só</span>
                    </label>
                    <label className="inline-flex items-center ml-6">
                        <input className="form-radio text-indigo-600" type="radio" name="scholarship" value="no_never_tried" />
                        <span className="ml-2">Moro com meus pais</span>
                    </label>
                    <label className="inline-flex items-center ml-6">
                        <input className="form-radio text-indigo-600" type="radio" name="scholarship" value="no_but_tried" />
                        <span className="ml-2">Moro em república</span>
                    </label>
					<label className="inline-flex items-center ml-6">
                        <input className="form-radio text-indigo-600" type="radio" name="scholarship" value="no_but_tried" />
                        <span className="ml-2">Moro com um companheire</span>
                    </label>
					<label className="inline-flex items-center ml-6">
                        <input className="form-radio text-indigo-600" type="radio" name="scholarship" value="no_but_tried" />
                        <span className="ml-2">Moro com companheires e/ou filhe(s)</span>
                    </label>
                </div>
            </label>
			<label className="block mb-2 text-gray-700">
				Você frequenta o campus presencilmente quantos dias por semana em média?
                <div className="mt-2">
                    <label className="inline-flex items-center">
                        <input className="form-radio text-indigo-600" type="radio" name="scholarship" value="yes" />
                        <span className="ml-2">3x ou menos</span>
                    </label>
                    <label className="inline-flex items-center ml-6">
                        <input className="form-radio text-indigo-600" type="radio" name="scholarship" value="no_never_tried" />
                        <span className="ml-2">5x ou mais</span>
                    </label>
                </div>
            </label>
            <button className="px-4 py-2 mt-5 text-white bg-indigo-500 rounded hover:bg-indigo-400 focus:outline-none focus:shadow-outline" type="submit">Enviar</button>
        </form>
    );
}


export default function Page() {
	return (
		<>
			<h1>Formulário para cadetes</h1>
			<QuestionForm />
		</>
	)
}