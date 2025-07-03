export default function Footer() {
    return (
        <footer className='max-w-full' id='dashboardFooter'>
            <div className='w-full   bg-white px-4 py-2 shadow z-50' id='footer-mid'>
                <hr className="bg-[#ccc]  h-px border-0 my-2" />
                <div className='w-full flex justify-between items-center px-4 py-2 '>
                    <p className='text-sm text-gray-900'>© 2025 WsCube Tech™. All Rights Reserved.</p>
                    <p className='text-sm font-semibold cursor-pointer hover:underline text-gray-500'>Design By <span className="text-blue-600">WsCube Tech</span></p>
                </div>
            </div>
        </footer>
    );
}
