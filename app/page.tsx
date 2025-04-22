"use client";
import Input from '@/component/Input';
import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  const [paymentMethod, setPaymentMethod] = useState<string>("paystack");

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
    <div className="min-h-screen bg-[#F8F9FB]">
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 w-full h-[122px] bg-[#165C3A] p-6 z-50 flex items-center">
        <div className="max-w-screen-xl mx-auto w-full px-4">
          <Image src="/icons/Frame 1618869375 (1).png" alt="Logo" height={39} width={107} />
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-[140px] px-4 flex justify-center">
        <div className="w-full max-w-2xl bg-white rounded-[16px] p-6 flex flex-col gap-6 shadow-md">
          {/* Heading */}
          <div className="flex flex-col gap-2">
            <h2 className="text-[24px] font-bold text-black">Select Payment Method</h2>
            <p className="text-[#6B7280] text-[16px]">Choose your preferred payment method</p>
          </div>

          {/* Payment Method Options */}
          <div className="flex flex-col md:flex-row gap-4">
            {/* Paystack */}
            <div
              className="flex-1 px-4 py-4 rounded-md shadow-sm flex items-center gap-4 bg-white cursor-pointer"
              onClick={() => handlePaymentMethodChange("paystack")}
            >
              <Image src="/icons/Vector (17).png" alt="" height={23} width={22} />
              <Image src="/icons/Vector (19).png" alt="" height={26} width={109} />
              <div className="ml-auto">
                <input 
                  type="checkbox"
                  className="accent-[#165C3A] cursor-pointer"
                  checked={paymentMethod === "paystack"}
                  style={{
                    width: 16,
                    height: 16,
                    borderRadius: '100px',
                    border: '1px solid #165C3A',
                  }}
                  readOnly
                />
              </div>
            </div>

            {/* Transfer */}
            <div
              className="flex-1 px-4 py-4 rounded-md shadow-sm flex items-center gap-4 bg-white cursor-pointer"
              onClick={() => handlePaymentMethodChange("transfer")}
            >
              <Image src="/icons/Vector (18).png" alt="" height={23} width={22} />
              <p className="text-[16px] md:text-[20px] font-bold  text-black">Pay With Transfer</p>
              <div className="ml-auto">
                <input
                  type="checkbox"
                  className="accent-[#165C3A] cursor-pointer"
                  checked={paymentMethod === "transfer"}
                  style={{
                    width: 16,
                    height: 16,
                    borderRadius: '100px',
                    border: '1px solid #165C3A',
                  }}
                  readOnly
                />
              </div>
            </div>
          </div>

          {/* Paystack Form */}
          {paymentMethod === "paystack" && (
            <div className="grid gap-6 mt-4">
              <Input label="Amount" className="bg-[#F9FAFB] border-[#F9FAFB]" />
              <Input label="Full Name" />
              <Input label="Email" type="email" />
              <button
                type="button"
                className="w-full h-12 mt-4 bg-[#165C3A] text-white font-semibold rounded-lg hover:bg-green-800 transition-colors"
              >
                Pay
              </button>
            </div>
          )}

          {/* Transfer Details */}
          {paymentMethod === "transfer" && (
            <div className="w-full border border-[#165C3A] rounded-[16px] p-4 space-y-4">
              <div className="flex gap-3 items-start">
                <Image src="/icons/material-symbols_info-outline.png" alt="" width={24} height={24} />
                <p className="text-[#6B7280] text-[14px]">
                  <span className="font-semibold">For a seamless transaction,</span> please transfer the exact amount displayed. Payments may be declined if the amount does not match.
                </p>
              </div>

              <hr className="border-[#9AA5BC80]" />

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <p className="text-[#727272]">Amount</p>
                  <div className="flex items-center gap-2">
                    <p className="text-[#727272]">NGN 3,000.00</p>
                    <button onClick={handleCopyAmount}>
                      <Image src="/icons/Vector (20).png" alt="Copy" width={18} height={18} />
                    </button>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <p className="text-[#727272]">Account Number</p>
                  <div className="flex items-center gap-2">
                    <p className="text-[#727272]">1234567890</p>
                    <button onClick={handleCopyAccountNumber}>
                      <Image src="/icons/Vector (20).png" alt="Copy" width={18} height={18} />
                    </button>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <p className="text-[#727272]">Bank Name</p>
                  <p className="text-[#727272]">Sterling Bank</p>
                </div>

                <div className="flex justify-between items-center">
                  <p className="text-[#727272]">Name of Beneficiary</p>
                  <p className="text-[#727272]">Sterling Bank</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
