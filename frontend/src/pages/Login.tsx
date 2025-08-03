import React, { useEffect } from 'react'
import { PrimaryColors, SecondaryColors } from '../helper/cssHelper';
import { ApplicationHelper } from '../helper/applicationHelper';
import TextBox from '../components/shared/controls/TextBox';
import { IInput } from '../interfaces/IInput';
import Button from '../components/shared/controls/Button';
import { generateOTP } from '../helper/utilHelper';
import { useNavigate } from 'react-router-dom';

let sentOTP = '';
const Login = () => {
    const navigate = useNavigate();
    const { AppName, AppDescription, BrandLogo, BrandLogoAlt } = ApplicationHelper;
    const [mobileNo, setMobileNo] = React.useState({
        value: '',
        name: 'MobileNo',
        label: '',
        error: null,
        id: 'mobileNo',
        type: 'number',
        placeholder: 'Enter your mobile number',
    } as IInput);
    // OTP state
    const [OTP, setOTP] = React.useState({
        value: '',
        name: 'OTP',
        label: '',
        error: null,
        id: 'otp',
        type: 'text',
        placeholder: 'Enter 6 digit OTP',
    } as IInput);

    useEffect(() => {
        const user = sessionStorage.getItem('user');
        if (user) {
            const parsedUser = JSON.parse(user);
            if (parsedUser.mobileNo) {
                navigate('/');
            }
        }
    }, []);

    const handleMobileNoChange = (value: string) => {
        if (!/^\d*$/.test(value)) {
            return;
        }
        if (value.length > 10) {
            return;
        }
        setMobileNo({ ...mobileNo, value: value.trim() });
    }

    const handleOTPChange = (value: string) => {
        if (!/^\d*$/.test(value)) {
            return;
        }
        if (value.length > 6) {
            return;
        }
        setOTP({ ...OTP, value: value.trim() });
    }

    const handleGetOTP = () => {
        if (mobileNo.value.length !== 10) {
            setMobileNo({ ...mobileNo, error: 'Please enter a valid mobile number' });
            return;
        }
        setMobileNo({ ...mobileNo, error: null });
        const otp = generateOTP();
        sentOTP = otp;
        alert(otp); // For demonstration, replace with actual OTP sending logic
        // TODO: Implement OTP sending logic
    }
    const signIn = () => {
        if(OTP.value.length !== 6) {
            setOTP({ ...OTP, error: 'Please enter a valid OTP' });
            return;
        }
        if (OTP.value !== sentOTP) {
            setOTP({ ...OTP, error: 'Invalid OTP. Please try again.' });
            return;
        }
        setOTP({ ...OTP, error: null });
        sessionStorage.setItem('user', JSON.stringify({ mobileNo: mobileNo.value }));
        alert('Login successful!'); // For demonstration, replace with actual login logic
        navigate('/');
    }
    return (
        <div className={`flex flex-col md:flex-row items-center justify-center min-h-screen px-5 ${PrimaryColors.primaryColor} ${PrimaryColors.primaryTextColor}`}>
            {/* branding secrtion */}
            <div className='flex flex-col w-full md:w-1/2 justify-center items-center text-center mb-10'>
                <div className='mb-8'>
                    <img src={BrandLogo} className="w-32 h-32" />
                </div>
                <div className=''>
                    <h1 aria-label={AppName} className='font-bold text-2xl text-center'>{AppName}</h1>
                    <h2 className='text-center text-lg' aria-label={AppDescription}>{AppDescription}</h2>
                </div>
            </div>
            {/* login form */}
            <div className='flex flex-col w-full md:w-1/2 justify-center items-center'>
                <h1 className='text-2xl font-bold mb-6'>Login</h1>
                {sentOTP ? (
                    <>
                    <TextBox
                        id={OTP.id}
                        name={OTP.name}
                        label={OTP.label}
                        error={OTP.error}
                        value={OTP.value}
                        placeholder={OTP.placeholder}
                        autoFocus={true}
                        autoComplete="off"
                        onChange={handleOTPChange}
                        className={`${SecondaryColors.secondaryTextColor} rounded-4xl w-full max-w-28 text-center text-2xl font-bold shadow-sm mb-4`}
                    />
                    {OTP.value.length === 6 &&
                        <Button
                            id="signIn"
                            type="button"
                            onClick={signIn}
                            className={`bg-transparent rounded-4xl ${PrimaryColors.primaryTextColor} outline-2 cursor-pointer font-bold py-2 px-4 rounded-4xl hover:${PrimaryColors.primaryColor} transition duration-300`}
                        >
                            Sign In
                        </Button>
                    }
                    </>
                ) : (
                <>
                    <TextBox
                        id={mobileNo.id}
                        name={mobileNo.name}
                        label={mobileNo.label}
                        error={mobileNo.error}
                        value={mobileNo.value}
                        placeholder={mobileNo.placeholder}
                        autoFocus={true}
                        autoComplete="off"
                        onChange={handleMobileNoChange}
                        className={`${SecondaryColors.secondaryTextColor} rounded-4xl w-full max-w-28 text-center text-2xl font-bold shadow-sm mb-4`}
                    />
                    {
                        mobileNo.value.length === 10 &&
                        <Button
                            id="getOtp"
                            type="button"
                            onClick={handleGetOTP}
                            className={`bg-transparent rounded-4xl ${PrimaryColors.primaryTextColor} outline-2 cursor-pointer font-bold py-2 px-4 rounded-4xl hover:${PrimaryColors.primaryColor} transition duration-300`}
                        >
                            Get OTP
                        </Button>
                    }
                </>
                )}
            </div>
        </div>
    )
}

export default Login