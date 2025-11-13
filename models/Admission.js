import mongoose from "mongoose";

const AdmissionSchema = new mongoose.Schema({
  userEmail: { type: String, required: true },
  collegeId: { type: String, required: true },
  collegeName: { type: String, required: true },
  candidateName: { type: String, required: true },
  subject: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },
  imageUrl: { type: String },
  submittedAt: { type: Date, default: Date.now },
});

export default mongoose.models.Admission || mongoose.model("Admission", AdmissionSchema);
