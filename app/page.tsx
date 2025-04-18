"use client"
import Input from '@/component/Input';
import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  const [paymentMethod, setPaymentMethod] = useState<string>("paystack"); // Default to Paystack

  const handlePaymentMethodChange = (method: string) => {
    setPaymentMethod(method);
  };

  const handleCopyAmount = () => {
    navigator.clipboard.writeText("NGN 3,000.00").then(() => {
      alert("Amount copied to clipboard!");
    });
  };

  const handleCopyAccountNumber = () => {
    navigator.clipboard.writeText("1234567890").then(() => {
      alert("Account Number copied to clipboard!");
    });
  };

  return (
    <div className="bg-[#F8F9FB] w-[1440px] h-[1195px]">
      {/* Header Section */}
      <div className="fixed top-0 left-0 w-[1440px] h-[122px] bg-[#165C3A] p-10 z-50">
      <Image src="/icons/Frame 1618869375 (1).png" alt="" height={39} width={107} />
    </div>
      {/* Main Content Section */}
      <div className="w-[700px] h-auto absolute top-[178px] left-[370.5px] 
        rounded-[16px] pt-[28px] pr-[49px] pb-[28px] pl-[49px] 
        bg-white flex flex-col gap-[20px]">
        
        {/* Heading and Description */}
        <div className="flex flex-col gap-2">
          <h2 className="font-inter font-bold text-[24px] leading-[140%] tracking-[0%]">Select Payment Method</h2>
          <p className="font-inter font-normal text-[16px] leading-[140%] tracking-[0%] text-[#6B7280]">
            Choose your preferred payment method
          </p>
        </div>

        {/* Payment Methods in the same row */}
        <div className="flex gap-[20px]">
          {/* Paystack */}
          <div 
            className="w-[290px] h-[70px] px-4 py-4 rounded-md shadow-sm flex items-center gap-[10px] bg-[#FFFFFF] cursor-pointer"
            onClick={() => handlePaymentMethodChange("paystack")}
          >
            <Image src="/icons/Vector (17).png" alt="" height={22.89} width={22.18} />
            <Image src="/icons/Vector (19).png" alt="" height={25.84} width={108.91} />
            <div className="ml-auto">
              <input 
                type="checkbox" 
                className="mt-1 accent-[#165C3A]"
                checked={paymentMethod === "paystack"}
                style={{
                  width: 16,
                  height: 16,
                  borderRadius: '100px',
                  border: '1px solid #165C3A',
                }}
              />
            </div>
          </div>

          {/* Transfer */}
          <div 
            className="w-[290px] h-[70px] px-4 py-4 rounded-md shadow-sm flex items-center gap-[10px] bg-[#FFFFFF] cursor-pointer"
            onClick={() => handlePaymentMethodChange("transfer")}
          >
            <Image src="/icons/Vector (18).png" alt="" height={22.89} width={22.18} />
            <p className="font-inter font-medium text-[20px] leading-[140%] tracking-[0%]">Pay With Transfer</p>
            <div className="ml-auto">
              <input
                type="checkbox"
                checked={paymentMethod === "transfer"}
                className="mt-1 accent-[#165C3A] rounded-full"
                style={{
                  width: 16,
                  height: 16,
                  borderRadius: '100px',
                  border: '1px solid #165C3A',
                }}
              />
            </div>
          </div>
        </div>

        {/* Paystack Form */}
        {paymentMethod === "paystack" && (
          <div className="w-full grid gap-6 mt-4">
            <Input label="Amount" className="bg-[#F9FAFB] border-none" />
            <Input label="Full Name" />
            <Input label="Email" type="email" />
            <button
              type="button"
              className="w-full h-12 mt-10 bg-[#165C3A] text-white font-semibold rounded-lg hover:bg-green-800 transition-colors"
            >
              Pay
            </button>
          </div>
        )}

        {/* Transfer Details */}
        {paymentMethod === "transfer" && (
          <div className="w-[602px] h-auto rounded-[16px] gap-[10px] border-[1px] border-[#165C3A] p-[20px]">
            <div className="flex gap-3">
              <Image src="/icons/material-symbols_info-outline.png" alt="" width={24} height={24} />
              <p className="text-center text-[#6B7280] font-inter">
                <span className="font-semibold">
                  For a seamless transaction, please transfer the exact amount displayed. Payments may be declined if the amount does not match.
                </span>
              </p>
            </div>

            <div className="w-full mt-3 border-[1px] border-solid border-[#9AA5BC80]"></div>

            <div className="p-4 mt-4">
              <div className="flex justify-between items-center">
                <p className="font-inter font-normal text-[16px] leading-[140%] tracking-[0%] text-[#727272] align-middle">Amount</p>
                <div className="flex items-center gap-2">
                  <p className="font-inter font-normal text-[16px] leading-[140%] tracking-[0%] text-[#727272] align-middle">NGN 3,000.00</p>
                  <button onClick={handleCopyAmount}>
                    <Image src="/icons/Vector (20).png" alt='' width={18} height={18} />
                  </button>
                </div>
              </div>

              <div className="flex justify-between items-center mt-3">
                <p className="font-inter font-normal text-[16px] leading-[140%] tracking-[0%] text-[#727272] align-middle">Account Number</p>
                <div className="flex items-center gap-2">
                  <p className="font-inter font-normal text-[16px] leading-[140%] tracking-[0%] text-[#727272] align-middle">1234567890</p>
                  <button onClick={handleCopyAccountNumber}>
                    <Image src="/icons/Vector (20).png" alt='' width={18} height={18} />
                  </button>
                </div>
              </div>

              <div className="flex justify-between items-center mt-3">
                <p className="font-inter font-normal text-[16px] leading-[140%] tracking-[0%] text-[#727272] align-middle">Bank Name</p>
                <p className="font-inter font-normal text-[16px] leading-[140%] tracking-[0%] text-[#727272] align-middle">Sterling Bank</p>
              </div>

              <div className="flex justify-between items-center mt-3">
                <p className="font-inter font-normal text-[16px] leading-[140%] tracking-[0%] text-[#727272] align-middle">Name of Beneficiary</p>
                <p className="font-inter font-normal text-[16px] leading-[140%] tracking-[0%] text-[#727272] align-middle">Sterling Bank</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
