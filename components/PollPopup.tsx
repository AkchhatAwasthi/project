import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PollPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasVoted, setHasVoted] = useState(false);

  useEffect(() => {
    // Show popup after 5 seconds if user hasn't seen it before
    const hasSeenPoll = localStorage.getItem('hasSeenPoll');
    if (!hasSeenPoll) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem('hasSeenPoll', 'true');
  };

  const handleVote = (option: string) => {
    setHasVoted(true);
    // Here you could send the vote to your analytics service
    console.log('User voted:', option);
    setTimeout(() => {
      handleClose();
    }, 2000);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg p-6 max-w-md w-full relative">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X className="h-5 w-5" />
        </button>

        {!hasVoted ? (
          <>
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Quick Question!
            </h3>
            <p className="text-gray-600 mb-6">
              What's your biggest challenge with your restaurant business?
            </p>
            <div className="space-y-3">
              <Button
                onClick={() => handleVote('online-visibility')}
                variant="outline"
                className="w-full text-left justify-start"
              >
                Online visibility on Swiggy/Zomato
              </Button>
              <Button
                onClick={() => handleVote('menu-optimization')}
                variant="outline"
                className="w-full text-left justify-start"
              >
                Menu design and optimization
              </Button>
              <Button
                onClick={() => handleVote('customer-retention')}
                variant="outline"
                className="w-full text-left justify-start"
              >
                Customer retention
              </Button>
              <Button
                onClick={() => handleVote('cost-management')}
                variant="outline"
                className="w-full text-left justify-start"
              >
                Cost management
              </Button>
            </div>
          </>
        ) : (
          <div className="text-center">
            <h3 className="text-xl font-bold text-green-600 mb-2">
              Thank you!
            </h3>
            <p className="text-gray-600">
              Your feedback helps us serve you better.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PollPopup;