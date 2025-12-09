import React, { useState } from "react";
import { Search, User, Mic, Save, ChevronRight } from "lucide-react";
import background from "./assets/background.png";

function Sidebar({ route, setRoute }) {
  return (
    <aside className="w-64 bg-white border-r border-gray-200 min-h-screen px-6 py-8">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold">
          <img src={background} alt="" />
        </div>
        <div className="text-lg font-semibold">GrowIT</div>
      </div>

      <nav className="space-y-2 text-sm text-gray-600">
        <div className="py-2 px-3 rounded-md text-[#344256] font-medium">
          Main
        </div>
        <div className="py-2 px-3 rounded-md bg-emerald-50 font-medium">
          Dashboard
        </div>
        <div className="mt-3">
          <button
            onClick={() => setRoute("add-patient")}
            className={`flex items-center gap-2 w-full text-left px-3 py-2 rounded-md ${
              route === "add-patient"
                ? "bg-emerald-100 text-emerald-800"
                : "hover:bg-gray-50"
            }`}
          >
            <User size={16} /> <span>Add Patient</span>
          </button>
          <button
            onClick={() => setRoute("doctor-report")}
            className={`flex items-center gap-2 w-full text-left px-3 py-2 rounded-md ${
              route === "doctor-report"
                ? "bg-emerald-100 text-emerald-800"
                : "hover:bg-gray-50"
            }`}
          >
            <ChevronRight size={16} /> <span>Doctor Report</span>
          </button>
        </div>
      </nav>
    </aside>
  );
}

function Header() {
  return (
    <header className="flex items-center justify-between mb-6">
      <div className="flex items-center gap-4 w-full max-w-2xl">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 text-gray-400" size={16} />
          <input
            placeholder="Search patients, appointments..."
            className="pl-10 pr-4 py-3 w-full rounded-lg border border-gray-200 bg-white"
          />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="text-sm text-gray-500">Apollo Hospital, HSR Layout</div>
        <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg border border-gray-200">
          <div className="w-8 h-8 rounded-full bg-gray-200" />
          <div className="text-sm">Dr. Stephen</div>
        </div>
      </div>
    </header>
  );
}

export default function App() {
  const [route, setRoute] = useState("add-patient");
  const [patient, setPatient] = useState({
    name: "",
    phone: "",
    gender: "",
    dob: "",
    age: "",
    marital: "",
    email: "",
    alternate: "",
  });
  const [report, setReport] = useState({
    doctor: "",
    complaints: "",
    investigation: "",
    pathology: "",
    medication: "",
  });

  const samplePatient = {
    name: "John Doe",
    id: "1730",
    gender: "Male",
    age: 38,
    phone: "9363589944",
    bp: "120/80 mmHg",
    sugar: "100 mg/dL",
    spO2: "98%",
    height: "190 cm",
    weight: "80 kg",
  };

  function handlePatientChange(e) {
    const { name, value } = e.target;
    setPatient((p) => ({ ...p, [name]: value }));
  }
  function handleReportChange(e) {
    const { name, value } = e.target;
    setReport((r) => ({ ...r, [name]: value }));
  }

  function submitPatient(e) {
    e.preventDefault();
    console.log("Patient submitted:", patient);
    alert("Patient saved (console output)");
  }
  function saveReport(e) {
    e.preventDefault();
    console.log("Report saved:", report);
    alert("Report saved (console output)");
  }

  return (
    <div className="min-h-screen bg-gray-100 font-sans text-gray-800">
      <div className="flex">
        <Sidebar route={route} setRoute={setRoute} />
        <main className="flex-1 p-8">
          <Header />

          <div className="rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white p-6 mb-6 shadow">
            <div className="text-lg font-semibold">
              {route === "add-patient"
                ? "Patient Details"
                : "Doctor Report - New OPD Visit"}
            </div>
          </div>

          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-8">
              <div className="bg-white rounded-lg border border-gray-200 p-4 mb-6 shadow">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-teal-600 font-medium">
                    Voice Input
                  </div>
                  <button className="flex items-center gap-2 text-sm bg-emerald-50 px-3 py-1 rounded-md border border-emerald-100">
                    <Mic size={14} /> Tap to speak
                  </button>
                </div>
                <div className="mt-3 text-sm text-gray-500">
                  Tap the mic, speak the patient details, and the form will fill
                  automatically (demo UI).
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow border border-gray-200">
                {route === "add-patient" ? (
                  <form onSubmit={submitPatient} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs text-gray-500">
                          Patient Name
                        </label>
                        <input
                          name="name"
                          value={patient.name}
                          onChange={handlePatientChange}
                          className="mt-1 w-full rounded-md border border-gray-200 p-3"
                        />
                      </div>
                      <div>
                        <label className="text-xs text-gray-500">
                          Patient's Phone Number
                        </label>
                        <input
                          name="phone"
                          value={patient.phone}
                          onChange={handlePatientChange}
                          className="mt-1 w-full rounded-md border border-gray-200 p-3"
                        />
                      </div>
                      <div>
                        <label className="text-xs text-gray-500">Gender</label>
                        <input
                          name="gender"
                          value={patient.gender}
                          onChange={handlePatientChange}
                          className="mt-1 w-full rounded-md border border-gray-200 p-3"
                        />
                      </div>
                      <div>
                        <label className="text-xs text-gray-500">
                          Date of Birth
                        </label>
                        <input
                          name="dob"
                          value={patient.dob}
                          onChange={handlePatientChange}
                          className="mt-1 w-full rounded-md border border-gray-200 p-3"
                        />
                      </div>
                      <div>
                        <label className="text-xs text-gray-500">Age</label>
                        <input
                          name="age"
                          value={patient.age}
                          onChange={handlePatientChange}
                          className="mt-1 w-full rounded-md border border-gray-200 p-3"
                        />
                      </div>
                      <div>
                        <label className="text-xs text-gray-500">
                          Marital Status
                        </label>
                        <input
                          name="marital"
                          value={patient.marital}
                          onChange={handlePatientChange}
                          className="mt-1 w-full rounded-md border border-gray-200 p-3"
                        />
                      </div>
                      <div>
                        <label className="text-xs text-gray-500">
                          Email Address
                        </label>
                        <input
                          name="email"
                          value={patient.email}
                          onChange={handlePatientChange}
                          className="mt-1 w-full rounded-md border border-gray-200 p-3"
                        />
                      </div>
                      <div>
                        <label className="text-xs text-gray-500">
                          Alternate Number
                        </label>
                        <input
                          name="alternate"
                          value={patient.alternate}
                          onChange={handlePatientChange}
                          className="mt-1 w-full rounded-md border border-gray-200 p-3"
                        />
                      </div>
                    </div>

                    <div className="flex justify-center pt-2">
                      <button className="px-8 py-3 rounded-full bg-emerald-200 text-emerald-900 font-medium">
                        Submit
                      </button>
                    </div>
                  </form>
                ) : (
                  <form onSubmit={saveReport} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs text-gray-500">
                          Doctor's Name
                        </label>
                        <input
                          name="doctor"
                          value={report.doctor}
                          onChange={handleReportChange}
                          className="mt-1 w-full rounded-md border border-gray-200 p-3"
                        />
                      </div>
                      <div>
                        <label className="text-xs text-gray-500">
                          General Complaints
                        </label>
                        <input
                          name="complaints"
                          value={report.complaints}
                          onChange={handleReportChange}
                          className="mt-1 w-full rounded-md border border-gray-200 p-3"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs text-gray-500">
                        Investigation
                      </label>
                      <textarea
                        name="investigation"
                        value={report.investigation}
                        onChange={handleReportChange}
                        rows={4}
                        className="mt-1 w-full rounded-md border border-gray-200 p-3"
                      />
                    </div>

                    <div>
                      <label className="text-xs text-gray-500">Pathology</label>
                      <textarea
                        name="pathology"
                        value={report.pathology}
                        onChange={handleReportChange}
                        rows={4}
                        className="mt-1 w-full rounded-md border border-gray-200 p-3"
                      />
                    </div>

                    <div>
                      <label className="text-xs text-gray-500">
                        Medication
                      </label>
                      <textarea
                        name="medication"
                        value={report.medication}
                        onChange={handleReportChange}
                        rows={4}
                        className="mt-1 w-full rounded-md border border-gray-200 p-3"
                      />
                    </div>

                    <div className="flex justify-center pt-2">
                      <button className="px-8 py-3 rounded-full bg-emerald-200 text-emerald-900 font-medium flex items-center gap-2">
                        <Save size={14} /> Save Report
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>

            <div className="col-span-4">
              <div className="bg-white rounded-lg p-5 shadow border border-gray-200 sticky top-8">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gray-200" />
                  <div>
                    <div className="text-sm font-semibold">
                      {samplePatient.name}
                    </div>
                    <div className="text-xs text-gray-500">
                      ID No: {samplePatient.id}
                    </div>
                    <div className="text-xs text-gray-500">
                      {samplePatient.gender} • {samplePatient.age} years
                    </div>
                  </div>
                </div>

                <div className="mt-4 text-sm space-y-1">
                  <div>
                    <span className="font-medium">Phone:</span>{" "}
                    {samplePatient.phone}
                  </div>
                  <div>
                    <span className="font-medium">BP:</span> {samplePatient.bp}
                  </div>
                  <div>
                    <span className="font-medium">Sugar:</span>{" "}
                    {samplePatient.sugar}
                  </div>
                  <div>
                    <span className="font-medium">SpO2:</span>{" "}
                    {samplePatient.spO2}
                  </div>
                  <div>
                    <span className="font-medium">Height:</span>{" "}
                    {samplePatient.height}
                  </div>
                  <div>
                    <span className="font-medium">Weight:</span>{" "}
                    {samplePatient.weight}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
