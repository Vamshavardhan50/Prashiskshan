import { useState } from "react";
import {
  GraduationCap,
  Mail,
  Lock,
  User,
  BadgeCheck,
  Building2,
  Briefcase,
  School,
} from "lucide-react";

const Register = () => {
  const [role, setRole] = useState("student");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [aadhaar, setAadhaar] = useState("");
  const [password, setPassword] = useState("");

  // Role-specific fields
  const [college, setCollege] = useState("");
  const [semester, setSemester] = useState("");
  const [facultyId, setFacultyId] = useState("");
  const [department, setDepartment] = useState("");
  const [company, setCompany] = useState("");
  const [website, setWebsite] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    const payload = {
      name,
      email,
      password,
      role,
      aadhaar,
      ...(role === "student" && { college, semester }),
      ...(role === "faculty" && { facultyId, department, college }),
      ...(role === "industry" && { company, website }),
    };
    console.log("Registering:", payload);
    // TODO: Send to backend or Firebase
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50 dark:bg-gray-900 text-green-900 dark:text-white px-4">
      <div className="max-w-md w-full bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
        <div className="flex items-center justify-center mb-6">
          <GraduationCap className="h-8 w-8 text-green-700" />
          <h2 className="ml-2 text-2xl font-bold"> Registration</h2>
        </div>

        <form onSubmit={handleRegister} className="space-y-4">
          {/* Role Selection */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Register as
            </label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full px-3 py-2 border rounded-md bg-white dark:bg-gray-700 dark:text-white"
            >
              <option value="student">Student</option>
              <option value="faculty">Faculty</option>
              <option value="industry">Industry Partner</option>
            </select>
          </div>

          {/* Name */}
          <InputField
            icon={<User />}
            label="Full Name"
            value={name}
            onChange={setName}
            placeholder="Your name"
          />

          {/* Email */}
          <InputField
            icon={<Mail />}
            label="Email"
            value={email}
            onChange={setEmail}
            placeholder="you@example.com"
            type="email"
          />

          {/* Aadhaar or ID */}
          <InputField
            icon={<BadgeCheck />}
            label="Aadhaar / ID Number"
            value={aadhaar}
            onChange={setAadhaar}
            placeholder="1234-5678-9012"
          />

          {/* Password */}
          <InputField
            icon={<Lock />}
            label="Password"
            value={password}
            onChange={setPassword}
            placeholder="••••••••"
            type="password"
          />

          {/* Role-Specific Fields */}
          {role === "student" && (
            <>
              <InputField
                icon={<School />}
                label="College Name"
                value={college}
                onChange={setCollege}
                placeholder="ABC College"
              />
              <InputField
                icon={<GraduationCap />}
                label="Semester"
                value={semester}
                onChange={setSemester}
                placeholder="5"
              />
            </>
          )}

          {role === "faculty" && (
            <>
              <InputField
                icon={<BadgeCheck />}
                label="Faculty ID"
                value={facultyId}
                onChange={setFacultyId}
                placeholder="FAC12345"
              />
              <InputField
                icon={<School />}
                label="Department"
                value={department}
                onChange={setDepartment}
                placeholder="Computer Science"
              />
              <InputField
                icon={<Building2 />}
                label="College Name"
                value={college}
                onChange={setCollege}
                placeholder="XYZ College"
              />
            </>
          )}

          {role === "industry" && (
            <>
              <InputField
                icon={<Briefcase />}
                label="Company Name"
                value={company}
                onChange={setCompany}
                placeholder="TechCorp Pvt Ltd"
              />
              <InputField
                icon={<Mail />}
                label="Website / API Access"
                value={website}
                onChange={setWebsite}
                placeholder="https://company.com"
              />
            </>
          )}

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-green-700 text-white py-2 rounded-md hover:bg-green-800"
          >
            Register
          </button>
        </form>

        {/* Login Redirect */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Already have an account?
            <a
              href="/login"
              className="text-green-700 dark:text-green-400 font-medium ml-1 hover:underline"
            >
              Login here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

// Reusable Input Field Component
const InputField = ({
  icon,
  label,
  value,
  onChange,
  placeholder,
  type = "text",
}) => (
  <div>
    <label className="block text-sm font-medium mb-1">{label}</label>
    <div className="flex items-center border rounded-md bg-white dark:bg-gray-700">
      <div className="mx-2 text-green-600">{icon}</div>
      <input
        type={type}
        required
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-2 py-2 bg-transparent outline-none"
        placeholder={placeholder}
      />
    </div>
  </div>
);

export default Register;
