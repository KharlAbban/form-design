import React from 'react';
import Logo from "./zl.png";

const Form = () => {
  return (
    <div className='mx-auto my-4 max-w-[1000px]'>
      <div className="flex gap-3">
        <div className="w-1/4">
          <div className="w-28 h-28 p-0">
            <img src={Logo} className='h-full w-full' alt="" />
          </div>
        </div>
        <div className="w-3/4 text-center">
          <h1 className="text-4xl font-bold">ZOOMLION PRIVATE SERVICES LTD.</h1>
          <p>PMB 117, Madina, Accra - Ghana; Ashaley Botwe, Near River Estates; Tel: <span className='font-semibold'>+233 0501518410</span> </p>
          <p>Website: zoomlionghana.com, Email: info@zoomlionprivateservices.com</p>
          <h2 className='text-lg font-semibold uppercase'>Registration Form: N.O. ....................... </h2>
        </div>
      </div>
      <div className="flex justify-around">
        <h3 className='flex justify-center items-center'>
          Corporate Client
          <input type="checkbox" className='ml-4 size-4' name="corpClient" id="" />
        </h3>
        <h3 className='flex justify-center items-center'>
          Residential Client
          <input type="checkbox" className='ml-4 size-4' name="resClient" id="" />
        </h3>
      </div>

      <div className='mt-2 mb-3'>
        <div className='row border border-black flex'>
          <div className='border-r-black border-r w-1/4 bg-gray-300'>First / Company Name</div>
          <div className='w-3/4'>
            <input type="text" className="w-full" />
          </div>
        </div>
        <div className='row border border-black flex'>
          <div className='border-r-black border-r w-1/4 bg-gray-300'>Last Name</div>
          <div className='w-3/4'>
            <input type="text" className="w-full" />
          </div>
        </div>
        <div className="row flex border-black border">
          <div className="w-1/2 flex">
            <div className="w-1/2 border-r border-r-black bg-gray-300">Gender</div>
            <div className="w-1/4 border-r border-r-black">
              Male
            </div>
            <div className="w-1/4 border-r border-r-black">Female</div>
          </div>
          <div className="w-1/2 flex">
            <div className="w-1/2 bg-gray-300 border-r border-r-black">House Number</div>
            <input type="text" className="w-full" />
          </div>
        </div>
        <div className="row flex border border-black">
          <div className="w-1/4 bg-gray-300 border-r border-r-black">Region</div>
          <div className="w-3/4 flex">
            <div className="border-r w-full text-center border-r-black">CAR</div>
            <div className="border-r w-full text-center border-r-black">ER</div>
            <div className="border-r w-full text-center border-r-black">VR</div>
            <div className="border-r w-full text-center border-r-black">CR</div>
            <div className="border-r w-full text-center border-r-black">AR</div>
            <div className="border-r w-full text-center border-r-black">WR</div>
            <div className="border-r w-full text-center border-r-black">BAR</div>
            <div className="border-r w-full text-center border-r-black">NR</div>
            <div className="border-r w-full text-center border-r-black">UER</div>
            <div className="border-r w-full text-center border-r-black">UWR</div>
          </div>
        </div>

        <div className="row flex border border-black">
          <div className="w-1/2 flex">
            <div className="w-1/2 border-r bg-gray-300 border-r-black">SOME CODE</div>
            <div className="w-1/2">
              <input type="text" className='w-full' />
            </div>
          </div>
          <div className="w-1/2 flex">
            <div className="w-1/2">BIN CODE</div>
            <div className="w-1/2">
              <input type="text" className='w-full' />
          </div>
        </div>

        </div>
        <div className="row flex border border-black">
            <div className="w-1/3 flex">
              <div className="w-1/2 border-r border-r-black bg-gray-300">Nationality</div>
              <input type="text" className='w-full' />
          </div>
            <div className="w-1/3 flex">
              <div className="w-1/2 border-x border-x-black bg-gray-300 px-1">Street Name</div>
              <input type="text" className='w-full' />
          </div>
            <div className="w-1/3 flex">
              <div className="w-1/2 bg-gray-300 px-1 border-x border-x-black">Additional Bin</div>
              <input type="text" className='w-full' />
          </div>
        </div>
        <div className="row flex border border-black">
          <div className="w-1/2 flex">
            <div className="w-1/2 bg-gray-300 border-r border-r-black">Longitude</div>
            <div className="w-1/2">
              <input type="text" className='w-full' />
            </div>
          </div>
          <div className="w-1/2 flex">
            <div className="w-1/2 bg-gray-300 border-x border-x-black">Latitude</div>
            <div className="w-1/2">
              <input type="text" className='w-full' />
            </div>
          </div>
        </div>
        <div className="row flex border border-black">
          <div className="w-1/2 flex">
            <div className="w-1/2 bg-gray-300 border-r border-r-black">Postal Address</div>
            <div className="w-1/2">
              <input type="text" className='w-full' />
            </div>
          </div>
          <div className="w-1/2 flex">
            <div className="w-1/2 bg-gray-300 border-x border-x-black">Registration Fees (GHc)</div>
            <div className="w-1/2">
              <input type="text" className='w-full' />
            </div>
          </div>
        </div>
        <div className="row flex border border-black">
          <div className="w-1/2 flex">
            <div className="w-1/2 bg-gray-300 border-r border-r-black">Telephone Number</div>
            <div className="w-1/2">
              <input type="text" className='w-full' />
            </div>
          </div>
          <div className="w-1/2 flex">
            <div className="w-1/2 bg-gray-300 border-x border-x-black">Fax Number</div>
            <div className="w-1/2">
              <input type="text" className='w-full' />
            </div>
          </div>
        </div>
        <div className="row flex border border-black">
          <div className="w-1/2 flex">
            <div className="w-1/2 bg-gray-300 border-r border-r-black">Mobile Number</div>
            <div className="w-1/2">
              <input type="text" className='w-full' />
            </div>
          </div>
          <div className="w-1/2 flex">
            <div className="w-1/2 bg-gray-300 border-x border-x-black">Email Address</div>
            <div className="w-1/2">
              <input type="text" className='w-full' />
            </div>
          </div>
        </div>
        <div className="row flex border border-black">
          <div className="w-1/2 flex">
            <div className="w-1/2 bg-gray-300 border-r border-r-black">Contact Person</div>
            <div className="w-1/2">
              <input type="text" className='w-full' />
            </div>
          </div>
          <div className="w-1/2 flex">
            <div className="w-1/2 bg-gray-300 border-x border-x-black">Contact Tel No.</div>
            <div className="w-1/2">
              <input type="text" className='w-full' />
            </div>
          </div>
        </div>
        <div className="row flex border-black border">
          <div className="w-1/3 bg-gray-300 border-r border-r-black">Bin Size / Container Size</div>
          <div className="w-2/3 bg-gray-300 flex">
            <div className="w-full text-center border-r border-r-black">120LTR</div>
            <div className="w-full text-center border-r border-r-black">240LTR</div>
            <div className="w-full text-center border-r border-r-black">1100LTR</div>
            <div className="w-full text-center border-r border-r-black">12m <sup>3</sup> </div>
            <div className="w-full text-center border-r border-r-black">15m <sup>3</sup> </div>
            <div className="w-full text-center">23m <sup>3</sup> </div>
          </div>
        </div>
        <div className="row flex border-black border">
          <div className="w-1/3 bg-gray-300 border-r border-r-black">Number of bins</div>
          <div className="w-2/3 flex">
            <div className="w-full text-center border-r border-r-black"></div>
            <div className="w-full text-center border-r border-r-black"></div>
            <div className="w-full text-center border-r border-r-black"></div>
            <div className="w-full text-center border-r border-r-black"></div>
            <div className="w-full text-center border-r border-r-black"></div>
            <div className="w-full text-center"></div>
          </div>
        </div>
        <div className="row flex border-black border">
          <div className="w-1/3 bg-gray-300 border-r border-r-black">Rental Charge</div>
          <div className="w-2/3 flex">
            <div className="w-full text-center border-r border-r-black"></div>
            <div className="w-full text-center border-r border-r-black"></div>
            <div className="w-full text-center border-r border-r-black"></div>
            <div className="w-full text-center border-r border-r-black"></div>
            <div className="w-full text-center border-r border-r-black"></div>
            <div className="w-full text-center"></div>
          </div>
        </div>
        <div className="row flex border-black border">
          <div className="w-1/3 bg-gray-300 border-r border-r-black">Haulage cost per lifting</div>
          <div className="w-2/3 flex">
            <div className="w-full text-center border-r border-r-black"></div>
            <div className="w-full text-center border-r border-r-black"></div>
            <div className="w-full text-center border-r border-r-black"></div>
            <div className="w-full text-center border-r border-r-black"></div>
            <div className="w-full text-center border-r border-r-black"></div>
            <div className="w-full text-center"></div>
          </div>
        </div>
        <div className="row flex border-black border">
          <div className="w-1/3 bg-gray-300 border-r border-r-black">Frequency of Haulage per week</div>
          <div className="w-2/3 flex">
            <div className="w-full text-center border-r border-r-black"></div>
            <div className="w-full text-center border-r border-r-black"></div>
            <div className="w-full text-center border-r border-r-black"></div>
            <div className="w-full text-center border-r border-r-black"></div>
            <div className="w-full text-center border-r border-r-black"></div>
            <div className="w-full text-center"></div>
          </div>
        </div>
        <div className="row flex border-black border">
          <div className="w-1/3 bg-gray-300 border-r border-r-black">Total amount per month:</div>
          <div className="w-2/3 flex gap-2">
            GHc
            <input type="text" className="w-full" />
          </div>
        </div>
      </div>

      <h3 className='font-bold underline mb-2'>How did you hear about the services?</h3>
      <div className="flex gap-2">
        <div className="hover:bg-gray-300 cursor-pointer text-center py-3 px-2 border border-black">Advertisement</div>
        <div className="hover:bg-gray-300 cursor-pointer text-center py-3 px-2 border border-black">Referrals</div>
        <div className="hover:bg-gray-300 cursor-pointer text-center py-3 px-2 border border-black">Marketing Officer</div>
        <div className="hover:bg-gray-300 cursor-pointer text-center py-3 px-2 border border-black">Website</div>
        <div className="hover:bg-gray-300 cursor-pointer text-center py-3 px-2 border border-black">Newspaper</div>
      </div>
      <p className="mt-2 font-semibold">Please attach a photocopy of Certificate of Incorporation or to Commence Business</p>

      <p className="font-semibold mt-2">Declaration:</p>
      <p>I confirm that all information provided bove is correct and can be used for service management purposes</p>

      <div className="flex justify-around">
        <div className="w-1/4">
          .....................................................................
          <p className='text-center'>Signature</p>
        </div>
        <div className="w-1/4">
          .....................................................................
          <p className='text-center'>Date of registration</p>
        </div>
      </div>

      <h2 className="text-xl font-bold underline text-center text-uppercase">For Official Use Only</h2>
      <div className="flex">
        <div className="w-1/2">
          Name of registration officer: .....................................................................
        </div>
        <div className="w-1/2">
          Signature: ..................................................................................................
        </div>
      </div>
      <div className="flex">
        <div className="w-1/2">
          Category: .....................................................................
        </div>
        <div className="w-1/2">
          Operational Class: ............................................................
        </div>
      </div>

      <div className='flex flex-wrap'>
        Funeral Remarks: ........................................................................................................................................................................
        <p>............................................................................................................................................................................................................</p>
      </div>


  </div>
  )
}

export default Form
