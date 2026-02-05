import React from 'react'

const AlertMsg = () => {
  return (
    <div>
      <div className="w-full max-w-md mx-auto bg-white rounded-[2.5rem] p-10 text-center relative shadow-xl">

        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#F3F0E9] flex items-center justify-center">
          <span className="text-3xl text-amber-500">🍯</span>
        </div>


        <h2 className="text-2xl font-serif text-gray-900 mb-3">
          Message Sent Successfully
        </h2>

        <p className="text-gray-600 leading-relaxed mb-8">
          Thank you for reaching out to us.
          We’ve received your message and will
          get back to you within 24 hours.
        </p>

        <p className="mt-5 text-xs text-gray-500">
          🤍 We appreciate your trust
        </p>

      </div>

    </div>
  )
}

export default AlertMsg