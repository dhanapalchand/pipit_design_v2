import React, { useState } from 'react';
import { CreditCard, QrCode, Smartphone, Check } from 'lucide-react';

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [isScanning, setIsScanning] = useState(false);
  const [isPaymentComplete, setIsPaymentComplete] = useState(false);

  const handlePayment = (e) => {
    e.preventDefault();
    // Simulate payment processing
    setTimeout(() => {
      setIsPaymentComplete(true);
    }, 1500);
  };

  const handleQRScan = () => {
    setIsScanning(true);
    // Simulate QR scanning
    setTimeout(() => {
      setIsScanning(false);
      setIsPaymentComplete(true);
    }, 2000);
  };

  if (isPaymentComplete) {
    return (
      <div className="d-flex align-items-center justify-content-center min-vh-100 bg-light">
        <div className="card shadow p-4 text-center" style={{ maxWidth: '400px', width: '100%' }}>
          <div className="bg-success text-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: '64px', height: '64px' }}>
            <Check className="w-50 h-50" />
          </div>
          <h2 className="h4 text-dark">Payment Successful!</h2>
          <p className="text-muted">Thank you for your payment.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100 bg-light">
      <div className="card shadow p-4 text-center" style={{ maxWidth: '400px', width: '100%' }}>
        <h1 className="h4 mb-4" style={{ color: '#2874F0' }}>Payment Methods</h1>

        <div className="mb-4">
          <button
            onClick={() => setPaymentMethod('card')}
            className={`btn btn-outline-primary w-100 mb-3 ${paymentMethod === 'card' ? 'active' : ''}`}
          >
            <CreditCard className="me-2" /> Credit/Debit Card
          </button>

          <button
            onClick={() => setPaymentMethod('qr')}
            className={`btn btn-outline-primary w-100 ${paymentMethod === 'qr' ? 'active' : ''}`}
          >
            <QrCode className="me-2" /> Scan QR Code
          </button>
        </div>

        {paymentMethod === 'card' && (
          <form onSubmit={handlePayment}>
            <div className="mb-3">
              <label className="form-label">Card Number</label>
              <input type="text" className="form-control" placeholder="1234 5678 9012 3456" />
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label">Expiry Date</label>
                <input type="text" className="form-control" placeholder="MM/YY" />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">CVV</label>
                <input type="text" className="form-control" placeholder="123" />
              </div>
            </div>
            <button type="submit" className="btn btn-primary w-100">Pay Now</button>
          </form>
        )}

        {paymentMethod === 'qr' && (
          <div>
            {isScanning ? (
              <div className="d-flex flex-column align-items-center">
                <div className="bg-light border rounded d-flex align-items-center justify-content-center mb-3" style={{ width: '300px', height: '300px' }}>
                  <Smartphone className="text-primary" style={{ fontSize: '3rem' }} />
                </div>
                <p className="text-muted">Scanning QR Code...</p>
              </div>
            ) : (
              <div className="d-flex flex-column align-items-center">
                <div className="bg-light border rounded d-flex align-items-center justify-content-center mb-3" style={{ width: '300px', height: '300px' }}>
                  <QrCode className="text-primary" style={{ fontSize: '6rem' }} />
                </div>
                <button
                  onClick={handleQRScan}
                  className="btn btn-primary w-100"
                >
                  Start Scanning
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Payment;
