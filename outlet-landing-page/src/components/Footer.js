import Image from "next/image";



const Footer = () => {
    return (
        <div className="lg:h-96 text-white bg-white w-full flex flex-col items-center justify-center relative">
          
          <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-8 relative pl-5 bg-gradient-to-right pt-10 rounded-t-xl h-[80%]">
            {/* Company Info */}
            <div className="md:pl-36 pl-0">
              {/* <h2 className="text-xl font-semibold mb-4"></h2> */}
              <Image
                    className="bg-white rounded-xl p-1"
                    src="/Final-logo.png" // Replace with your image path
                    alt="Logo"
                    height={200}
                    width={200}
                />
              <p className="mb-4 mt-10">
                We work with a passion of taking challenges and creating new ones in advertising sector.
              </p>
            </div>
  
            {/* Quick Links */}
            <div className="md:pl-40 pl-0">
              <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
              <ul>
                <li>
                  <a href="/about" className="hover:underline">
                    About Us
                  </a>
                </li>
                {/* <li>
                  <a href="#" className="hover:underline">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Contact
                  </a>
                </li> */}
                <li>
                  <a href="/privacy" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
  
            {/* Social Media */}
            <div className="place-items-center">
              <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-blue-500">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    {/* Facebook Icon */}
                    <path
                      d="M22.675 0h-21.35C.597 0 0 .597 0 1.326v21.348C0 23.402.597 24 1.325 24H12.82V14.692H9.69V11.14h3.13V8.412c0-3.1 1.894-4.788 4.662-4.788 1.325 0 2.465.099 2.798.143v3.24H17.42c-1.763 0-2.104.838-2.104 2.065v2.712h4.208l-.548 3.552h-3.66V24h7.16c.729 0 1.326-.597 1.326-1.326V1.326C24 .597 23.402 0 22.675 0z"
                    />
                  </svg>
                </a>
                <a href="#" className="hover:text-blue-400">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    {/* Twitter Icon */}
                    <path
                      d="M24 4.557a9.93 9.93 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.86 9.86 0 01-3.127 1.195A4.916 4.916 0 0016.616 3c-2.72 0-4.928 2.21-4.928 4.928 0 .386.043.763.127 1.124C7.728 8.917 4.1 6.864 1.671 3.725a4.902 4.902 0 00-.666 2.475 4.924 4.924 0 002.188 4.107 4.902 4.902 0 01-2.231-.616v.062a4.929 4.929 0 003.95 4.827 4.902 4.902 0 01-2.224.084 4.93 4.93 0 004.604 3.42A9.865 9.865 0 010 21.54a13.937 13.937 0 007.548 2.212c9.057 0 14.007-7.512 14.007-14.007 0-.213-.005-.425-.014-.637A9.936 9.936 0 0024 4.557z"
                    />
                  </svg>
                </a>
                <a href="#" className="hover:text-pink-500">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    {/* Instagram Icon */}
                    <path
                      d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.056 1.977.24 2.438.512.54.312.918.73 1.33 1.33.272.462.456 1.268.512 2.438.058 1.267.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.24 1.977-.512 2.438-.312.54-.73.918-1.33 1.33-.462.272-1.268.456-2.438.512-1.267.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.977-.24-2.438-.512-.54-.312-.918-.73-1.33-1.33-.272-.462-.456-1.268-.512-2.438-.058-1.267-.07-1.646-.07-4.85s.012-3.584.07-4.85c.056-1.17.24-1.977.512-2.438.312-.54.73-.918 1.33-1.33.462-.272 1.268-.456 2.438-.512 1.267-.058 1.646-.07 4.85-.07zm0-2.163C8.757 0 8.331.012 7.052.07 5.713.127 4.655.327 3.79.727 2.845 1.17 2.07 1.945 1.627 2.89c-.4.865-.6 1.923-.657 3.262C.872 8.257.86 8.683.86 12s.012 3.743.07 4.933c.057 1.339.257 2.397.657 3.262.443.945 1.218 1.72 2.163 2.163.865.4 1.923.6 3.262.657 1.289.058 1.715.07 4.933.07s3.743-.012 4.933-.07c1.339-.057 2.397-.257 3.262-.657.945-.443 1.72-1.218 2.163-2.163.4-.865.6-1.923.657-3.262.058-1.29.07-1.716.07-4.933s-.012-3.743-.07-4.933c-.057-1.339-.257-2.397-.657-3.262-.443-.945-1.218-1.72-2.163-2.163-.865-.4-1.923-.6-3.262-.657-1.29-.058-1.716-.07-4.933-.07z"
                    />
                  </svg>
                </a>
              </div>

              <div className="flex flex-col items-start pt-10 pb-5">
                <div className="flex items-center justify-center pt-10">
                    <Image
                        className=""
                        src="/email.png" // Replace with your image path
                        alt="Logo"
                        height={20}
                        width={20}
                    />
                    <span className="pl-3">squadinnovators@gmail.com</span>
                </div>
                <div  className="flex items-center justify-center pt-3">    
                <Image
                    className=""
                    src="/phone.png" // Replace with your image path
                    alt="Logo"
                    height={20}
                    width={20}
                />
                <span className="pl-3">+880 1677-182084</span>
                </div>
              </div>
            </div>
          </div>

        <div className="bg-[#232670] w-full h-[20%] flex items-center justify-center pb-8">
        <p className=" text-white">© {new Date().getFullYear()} Squad Innovators. All rights reserved.</p>
        </div>
         
          
        </div>
    );
  };
  
  export default Footer;