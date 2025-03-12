
import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { CheckCircle2, FileText, Phone,MapPin } from 'lucide-react';
import { toast } from 'sonner';
import emailjs from 'emailjs-com';

const Admission = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    childName: '',
    grade: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const headingRef = useScrollAnimation();
  const textRef = useScrollAnimation({ threshold: 0.2 });
  const formRef = useScrollAnimation({ 
    animationType: 'slide-in-right',
    threshold: 0.3
  });
  const infoRef = useScrollAnimation({ 
    animationType: 'slide-in-left',
    threshold: 0.3
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Replace these IDs with your actual EmailJS service, template, and user IDs
      const serviceId = 'service_jtgsh7d';
      const templateId = 'template_2dmam9n';
      const userId = 'LHfI7ppcmri7OBH4h';
      
      const templateParams = {
        from_name: formData.name,
        reply_to: formData.email,
        phone: formData.phone,
        child_name: formData.childName,
        grade: formData.grade,
        message: formData.message
      };
      
      console.log('Sending email with params:', templateParams);
      
      await emailjs.send(serviceId, templateId, templateParams, userId);
      
      // Show success message
      toast.success("Inquiry submitted successfully! Our admissions team will contact you soon.");
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        childName: '',
        grade: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending email:', error);
      toast.error("Failed to submit inquiry. Please try again or contact us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <section id="admission" className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 
            ref={headingRef as React.RefObject<HTMLHeadingElement>} 
            className="section-title mx-auto flex flex-col items-center justify-center"
          >
            Admission Process
            <span className="after:mx-auto"></span>
          </h2>
          
          <p 
            ref={textRef as React.RefObject<HTMLParagraphElement>} 
            className="text-gray-700"
          >
            Join the ST. Maria family and give your child the gift of quality education in a nurturing environment.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Admission Information */}
          <div ref={infoRef as React.RefObject<HTMLDivElement>}>
            <h3 className="text-2xl font-serif font-semibold mb-6 text-school-navy">
              How to Apply
            </h3>
            
            <ul className="space-y-6 mb-8">
            <AdmissionStep 
  icon={<Phone className="text-school-maroon" />} 
  title="Call Us"
  description="Get in touch with our admissions team for initial guidance and inquiries."
/>

<AdmissionStep 
  icon={<FileText className="text-school-maroon" />} 
  title="Student Inquiry"
  description="Fill out the inquiry form with your child's details and educational needs."
/>

<AdmissionStep 
  icon={<MapPin className="text-school-maroon" />} 
  title="Visit Campus"
  description="Schedule a visit to explore our facilities and interact with faculty."
/>

<AdmissionStep 
  icon={<CheckCircle2 className="text-school-maroon" />} 
  title="Take Admission"
  description="Complete the registration process and join the St. Maria School family!"
/>

            </ul>
            
            {/* <div className="bg-school-cream p-6 rounded-lg">
              <h4 className="text-lg font-serif font-medium mb-3 text-school-navy">
                Admission Dates for 2023-24
              </h4>
              <p className="text-gray-700 mb-4">
                Applications for the upcoming academic year are now open. Limited seats available.
              </p>
              <a href="#" className="btn-primary inline-flex">Download Brochure</a>
            </div> */}
          </div>
          
          {/* Inquiry Form */}
          <div ref={formRef as React.RefObject<HTMLDivElement>}>
            <div className="bg-white shadow-xl rounded-lg p-8 border border-gray-100">
              <h3 className="text-2xl font-serif font-semibold mb-6 text-school-navy">
                Admission Inquiry
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-1 text-sm">Parent's Name*</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-school-maroon"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-1 text-sm">Email*</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-school-maroon"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 mb-1 text-sm">Phone Number*</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-school-maroon"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="childName" className="block text-gray-700 mb-1 text-sm">Child's Name*</label>
                  <input
                    type="text"
                    id="childName"
                    name="childName"
                    value={formData.childName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-school-maroon"
                  />
                </div>
                
                <div>
                  <label htmlFor="grade" className="block text-gray-700 mb-1 text-sm">Applying for Grade*</label>
                  <select
                    id="grade"
                    name="grade"
                    value={formData.grade}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-school-maroon"
                  >
                    <option value="">Select Grade</option>
                    <option value="Nursery">Nursery</option>
                    <option value="KG">KG</option>
                    <option value="Grade 1">Grade 1</option>
                    <option value="Grade 2">Grade 2</option>
                    <option value="Grade 3">Grade 3</option>
                    <option value="Grade 4">Grade 4</option>
                    <option value="Grade 5">Grade 5</option>
                    <option value="Grade 6">Grade 6</option>
                    <option value="Grade 7">Grade 7</option>
                    <option value="Grade 8">Grade 8</option>
                    <option value="Grade 9">Grade 9</option>
                    <option value="Grade 10">Grade 10</option>
                    <option value="Grade 11">Grade 11</option>
                    <option value="Grade 12">Grade 12</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-1 text-sm">Additional Information</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-school-maroon"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className={`btn-primary w-full flex justify-center items-center ${isSubmitting ? 'opacity-75 cursor-wait' : ''}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </>
                  ) : (
                    'Submit Inquiry'
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const AdmissionStep = ({ 
  icon, 
  title, 
  description 
}: { 
  icon: React.ReactNode, 
  title: string, 
  description: string 
}) => {
  return (
    <li className="flex gap-4">
      <div className="mt-1">
        {icon}
      </div>
      <div>
        <h4 className="font-medium text-lg mb-1 text-school-navy">{title}</h4>
        <p className="text-gray-600">{description}</p>
      </div>
    </li>
  );
};

export default Admission;
