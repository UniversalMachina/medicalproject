import React, { useState, useEffect } from 'react';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

const ParentingCapacityEvaluation = () => {
  const [formData, setFormData] = useState('');

  useEffect(() => {
    const data = `
      <div style="padding: 20px; font-family: Arial, sans-serif; line-height: 1.6;">
        <h1 style="text-align: center; color: #4CAF50;">Parenting Capacity Evaluation</h1>
        <p><strong>Date of Referral:</strong> 2018</p>
        <p><strong>Referral Source:</strong> School and other parents</p>
        <p><strong>Date of Report:</strong></p>

        <h2 style="color: #4CAF50; margin-top: 20px;">Parent(s)</h2>
        <p><strong>Name:</strong> Travis Duran</p>
        <p><strong>DOB:</strong></p>
        <p><strong>Age:</strong></p>

        <h2 style="color: #4CAF50; margin-top: 20px;">Child/Children</h2>
        <p><strong>Name:</strong> Rosalind</p>
        <p><strong>DOB:</strong></p>
        <p><strong>Age:</strong> 14</p>

        <h2 style="color: #4CAF50; margin-top: 20px;">Family Members (If applicable)</h2>
        <p><strong>Name:</strong> Paternal grandfather</p>
        <p><strong>Relation to Parent:</strong> Father</p>
        <p><strong>Relation to Child:</strong> Grandfather</p>

        <h2 style="color: #4CAF50; margin-top: 20px;">Identifying Information & Reason for Referral</h2>
        <p>Neglect in the home, concerns raised by school and other parents, manic episode, substance abuse</p>

        <h2 style="color: #4CAF50; margin-top: 20px;">History of Agency Involvement and Protective Concerns</h2>
        <p>Concerns about Travis Duran's stability include substance abuse issues, child neglect, hospitalization due to a manic episode, and current placement details indicating the need for further evaluation.</p>
        
        <h3 style="color: #4CAF50; margin-top: 20px;">Evaluation Questions:</h3>
        <ul style="margin-left: 20px;">
          <li>Does Travis Duran understand the concerns presented by regarding substance use, mental health barriers, and living conditions?</li>
          <li>Does Travis Duran have adequate social support?</li>
          <li>Is Travis Duran complying with the Family Action Plan?</li>
          <li>Is Travis Duran able to provide a stable environment for their children?</li>
        </ul>

        <h2 style="color: #4CAF50; margin-top: 20px;">Parent’s Understanding of the Reason for Evaluation</h2>
        <p>The purpose is to evaluate Travis Duran's potential for reunification and his understanding of stable care for his children.</p>

        <h2 style="color: #4CAF50; margin-top: 20px;">Informed Consent & Limits of Confidentiality</h2>
        <p>Consent forms were reviewed and sent back by the involved social workers.</p>

        <h2 style="color: #4CAF50; margin-top: 20px;">Collateral Contacts</h2>
        <p><strong>Parent:</strong></p>
        <p><strong>Agency:</strong> DCF</p>
        <p><strong>Contact:</strong> Sophia Saberna</p>
        <p><strong>Title:</strong> Social Worker - General Case Manager</p>
        
        <p><strong>Child:</strong></p>
        <p><strong>Agency:</strong> DCF</p>
        <p><strong>Contact:</strong> Sophia Saberna</p>
        <p><strong>Title:</strong> Social Worker - General Case Manager</p>

        <h2 style="color: #4CAF50; margin-top: 20px;">Summary of Evaluation Activities & Records Reviewed</h2>
        <ul style="margin-left: 20px;">
          <li><strong>&lt;Date&gt;:</strong> &lt;Type of activity&gt; (e.g., Interview with &lt;person's name&gt; via &lt;method&gt;)</li>
          <li><strong>&lt;Date&gt;:</strong> &lt;Type of activity&gt; (e.g., Interview with &lt;person's name&gt; via &lt;method&gt;)</li>
        </ul>

        <h2 style="color: #4CAF50; margin-top: 20px;">Clinical Assessment</h2>
        <p><strong>Mental Status and Behavioral Observations:</strong></p>
        <p><strong>Biopsychosocial Information:</strong></p>

        <h2 style="color: #4CAF50; margin-top: 20px;">Information about Child/Children</h2>
        <h3 style="color: #4CAF50; margin-top: 20px;">Collateral Interviews for Child</h3>
        <p><strong>Name of Contact:</strong> Sophia Saberna</p>
        <p><strong>Credentials:</strong> Social Worker - General Case Manager</p>
        <p><strong>Agency:</strong> DCF</p>
        <p><strong>Summary of Child Observations:</strong> Rosalind is currently in kinship foster placement with her paternal grandfather and is adjusting well.</p>

        <h3 style="color: #4CAF50; margin-top: 20px;">Youth Interviews (If Applicable)</h3>

        <h2 style="color: #4CAF50; margin-top: 20px;">Information Relevant to Parenting</h2>
        <p><strong>Parent’s Response to Protective Concerns:</strong></p>
        <p><strong>Action Plan Tasks/Progress towards Meeting Tasks:</strong></p>
        <p><strong>Parent’s Perception of the Children’s Needs:</strong></p>
        <p><strong>Parent’s Perspective on their Parenting Style:</strong></p>
        <p><strong>Cultural and Environmental Factors:</strong></p>

        <h3 style="color: #4CAF50; margin-top: 20px;">Collateral Interviews for Parent</h3>
        <p><strong>Name of Contact:</strong> Sophia Saberna</p>
        <p><strong>Credentials:</strong> Social Worker - General Case Manager</p>
        <p><strong>Agency:</strong> DCF</p>
        <p><strong>Parent-Child Observation:</strong> Rosalind misses her father and the time they used to spend together. Weekly visitations are conducted at a visitation center.</p>

        <h2 style="color: #4CAF50; margin-top: 20px;">Course & Scope of the Evaluation</h2>
        <p><strong>Response to DCF Referral Questions:</strong> Assessment to determine if Travis has the skills necessary for reunification and providing stable care.</p>

        <h2 style="color: #4CAF50; margin-top: 20px;">Summary of Clinical Findings & Recommendations</h2>
        <p><strong>Historical Protective Concerns:</strong> Historical concerns include neglect and substance abuse leading to Travis Duran’s children being removed from his care.</p>
        <p><strong>Dynamic or Clinical Risk Factors:</strong></p>
        <p><strong>Protective Factors:</strong> The paternal grandfather is open to full adoption and providing a stable environment.</p>
        <p><strong>Recommendations:</strong> Evaluate Travis Duran's ability to meet DCF goals, provide substance use treatment, and ensure mental health management.</p>

        <h2 style="color: #4CAF50; margin-top: 20px;">Evaluator</h2>
        <p><strong>Name:</strong> Fania</p>
        <p><strong>Professional Title:</strong></p>
        <p><strong>Degree:</strong></p>
        <p><strong>Licensure:</strong></p>
        <p><strong>Signature:</strong></p>
      </div>
    `;
    setFormData(data);
  }, []);

  const generatePDF = () => {
    const input = document.getElementById('evaluation');
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      pdf.addImage(imgData, 'PNG', 0, 0);
      pdf.save('evaluation.pdf');
    });
  };

  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <div
        id="evaluation"
        dangerouslySetInnerHTML={{ __html: formData }}
        style={{ textAlign: 'left', margin: '0 auto', maxWidth: '800px', border: '1px solid #ccc', padding: '20px', borderRadius: '10px', background: '#f9f9f9' }}
      ></div>
      <button
        onClick={generatePDF}
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          fontSize: '16px',
          color: '#fff',
          backgroundColor: '#4CAF50',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        Download as PDF
      </button>
    </div>
  );
};

export default ParentingCapacityEvaluation;
