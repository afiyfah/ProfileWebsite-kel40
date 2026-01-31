export default function Footer() { 
  return ( 
    <section id="footer" className="bg-[#EFBF6A] text-[#59171B] p-6 
text-center" >
      <p>&copy; 2025 John Doe. All rights reserved.</p> 
      <div className="flex gap-4 justify-center mt-4"> 
        <a className="ri-twitter-x-line gap-" href="#"> 
          Twitter  
        </a> 
        <div>
        <a  className="ri-linkedin-box-fill ri-2xl" href="#"> 
          LinkedIn 
        </a> 
        </div>

        <div>
        <a className= "ri-github-fill" href="#"> 
           GitHub 
        </a> 
        </div>
      </div> 
    </section>
  ); 
}