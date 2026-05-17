import React, { useState } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { submitFeedback } from '../supabaseService';
import { toastSuccess, toastError } from '../toast';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

const FeedbackContainer = styled.div`
  font-family: var(--font-family-primary);
  padding: var(--spacing-xl) var(--spacing-md);
  background: linear-gradient(135deg, var(--medhal-cream) 0%, #e8dcc8 100%);
  min-height: calc(100vh - var(--header-height));
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    padding: var(--spacing-2xl) var(--spacing-lg);
  }

  @media (min-width: 1024px) {
    padding: var(--spacing-2xl) var(--spacing-xl);
  }
`;

const Title = styled.h2`
  color: var(--medhal-gold-dark);
  font-size: var(--font-size-3xl);
  font-weight: var(--font-weight-bold);
  margin-bottom: var(--spacing-lg);
  text-align: center;
  font-family: var(--font-family-primary);
  position: relative;
  padding-bottom: var(--spacing-md);

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: linear-gradient(90deg, var(--medhal-gold-dark), var(--medhal-gold));
    border-radius: 2px;
  }

  @media (max-width: 480px) {
    font-size: var(--font-size-2xl);
    margin-bottom: var(--spacing-md);
  }
`;

const Subtitle = styled.p`
  color: var(--medhal-text-secondary);
  font-size: var(--font-size-base);
  text-align: center;
  margin-bottom: var(--spacing-2xl);
  max-width: 600px;
  line-height: var(--line-height-relaxed);
`;

const Form = styled.form`
  background: linear-gradient(145deg, var(--medhal-white) 0%, #faf8f5 100%);
  padding: var(--spacing-2xl) var(--spacing-lg);
  border-radius: var(--radius-2xl);
  width: 100%;
  max-width: 600px;
  box-shadow: 0 16px 40px rgba(139, 90, 43, 0.15);
  border: 2px solid var(--medhal-gold-light);

  @media (min-width: 768px) {
    padding: var(--spacing-2xl) var(--spacing-xl);
  }

  @media (max-width: 480px) {
    padding: var(--spacing-lg) var(--spacing-md);
    border-radius: var(--radius-xl);
  }
`;

const FormGroup = styled.div`
  margin-bottom: var(--spacing-lg);

  &:last-child {
    margin-bottom: 0;
  }
`;

const Label = styled.label`
  display: block;
  margin-bottom: var(--spacing-sm);
  color: var(--medhal-gold-dark);
  font-weight: var(--font-weight-medium);
  font-size: var(--font-size-sm);
`;

const Input = styled.input`
  width: 100%;
  padding: var(--spacing-md) var(--spacing-md);
  border-radius: var(--radius-lg);
  border: 2px solid var(--medhal-gold-light);
  box-sizing: border-box;
  font-size: var(--font-size-base);
  background-color: var(--medhal-white);
  color: var(--medhal-text-secondary);
  transition: all var(--transition-base);
  font-family: var(--font-family-primary);

  &:focus {
    outline: none;
    border-color: var(--medhal-gold-dark);
    box-shadow: 0 0 0 4px rgba(139, 90, 43, 0.1);
  }

  &::placeholder {
    color: #A89580;
  }

  &:disabled {
    background-color: #f5f5f5;
    cursor: not-allowed;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: var(--spacing-md) var(--spacing-md);
  border-radius: var(--radius-lg);
  border: 2px solid var(--medhal-gold-light);
  box-sizing: border-box;
  font-size: var(--font-size-base);
  background-color: var(--medhal-white);
  color: var(--medhal-text-secondary);
  transition: all var(--transition-base);
  font-family: var(--font-family-primary);
  resize: vertical;
  min-height: 120px;

  &:focus {
    outline: none;
    border-color: var(--medhal-gold-dark);
    box-shadow: 0 0 0 4px rgba(139, 90, 43, 0.1);
  }

  &::placeholder {
    color: #A89580;
  }

  &:disabled {
    background-color: #f5f5f5;
    cursor: not-allowed;
  }
`;

const RatingContainer = styled.div`
  display: flex;
  gap: var(--spacing-md);
  align-items: center;
`;

const StarButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all var(--transition-fast);
  font-size: 32px;

  svg {
    color: ${props => props.active ? 'var(--medhal-gold-dark)' : '#D4B896'};
    transition: all var(--transition-fast);
  }

  &:hover svg {
    color: var(--medhal-gold-dark);
    transform: scale(1.2);
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

const RatingLabel = styled.span`
  color: var(--medhal-text-secondary);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: var(--spacing-lg);
  margin-top: var(--spacing-xl);

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const Button = styled.button`
  padding: var(--spacing-md) var(--spacing-lg);
  border-radius: var(--radius-lg);
  border: none;
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-base);
  font-family: var(--font-family-primary);
  transition: all var(--transition-base);
  cursor: pointer;
  min-width: 140px;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

const SubmitButton = styled(Button)`
  background: linear-gradient(135deg, var(--medhal-gold-dark) 0%, #6B4423 100%);
  color: var(--medhal-white);
  box-shadow: 0 4px 12px rgba(139, 90, 43, 0.3);

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(139, 90, 43, 0.4);
    background: linear-gradient(135deg, #6B4423 0%, #5A3820 100%);
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }
`;

const ResetButton = styled(Button)`
  background: var(--medhal-light-gray);
  color: var(--medhal-text);
  border: 2px solid var(--medhal-gold-light);

  &:hover:not(:disabled) {
    background: var(--medhal-gold-light);
    color: var(--medhal-white);
  }
`;

const SuccessMessage = styled.div`
  background: linear-gradient(135deg, var(--medhal-success) 0%, #059669 100%);
  color: var(--medhal-white);
  padding: var(--spacing-lg) var(--spacing-md);
  border-radius: var(--radius-lg);
  margin-bottom: var(--spacing-lg);
  text-align: center;
  font-weight: var(--font-weight-medium);
`;

const Feedback = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rating: 5,
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRatingChange = (newRating) => {
    setFormData(prev => ({
      ...prev,
      rating: newRating,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (!formData.name || !formData.email || !formData.message) {
        toastError(isArabic ? 'الرجاء ملء جميع الحقول' : 'Please fill all required fields');
        setLoading(false);
        return;
      }

      await submitFeedback({
        name: formData.name,
        email: formData.email,
        rating: formData.rating,
        message: formData.message,
      });

      setSubmitted(true);
      toastSuccess(isArabic ? 'شكراً على ملاحظاتك!' : 'Thank you for your feedback!');
      
      // Reset form after 2 seconds
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          rating: 5,
          message: '',
        });
        setSubmitted(false);
      }, 2000);
    } catch (error) {
      toastError(error.message || (isArabic ? 'فشل إرسال الملاحظات' : 'Failed to submit feedback'));
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      rating: 5,
      message: '',
    });
    setSubmitted(false);
  };

  const renderStars = () => {
    return Array.from({ length: 5 }, (_, index) => (
      <StarButton
        key={index + 1}
        type="button"
        active={index + 1 <= formData.rating}
        onClick={() => handleRatingChange(index + 1)}
        disabled={loading}
      >
        {index + 1 <= formData.rating ? (
          <StarIcon />
        ) : (
          <StarBorderIcon />
        )}
      </StarButton>
    ));
  };

  return (
    <FeedbackContainer dir={isArabic ? 'rtl' : 'ltr'}>
      <Title>{isArabic ? 'أرسل ملاحظاتك' : 'Share Your Feedback'}</Title>
      <Subtitle>
        {isArabic 
          ? 'نقدّر آراءك واقتراحاتك لتحسين تجربتك على منصة مدهال'
          : 'We value your feedback to help us improve Medhal platform'
        }
      </Subtitle>

      <Form onSubmit={handleSubmit}>
        {submitted && (
          <SuccessMessage>
            {isArabic ? 'تم إرسال الملاحظات بنجاح!' : 'Feedback submitted successfully!'}
          </SuccessMessage>
        )}

        <FormGroup>
          <Label htmlFor="name">{isArabic ? 'الاسم *' : 'Full Name *'}</Label>
          <Input
            type="text"
            id="name"
            name="name"
            placeholder={isArabic ? 'أدخل اسمك' : 'Enter your full name'}
            value={formData.name}
            onChange={handleChange}
            disabled={loading}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="email">{isArabic ? 'البريد الإلكتروني *' : 'Email Address *'}</Label>
          <Input
            type="email"
            id="email"
            name="email"
            placeholder={isArabic ? 'أدخل بريدك الإلكتروني' : 'Enter your email'}
            value={formData.email}
            onChange={handleChange}
            disabled={loading}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label>{isArabic ? 'التقييم' : 'Rating'}</Label>
          <RatingContainer>
            {renderStars()}
            <RatingLabel>{formData.rating} / 5</RatingLabel>
          </RatingContainer>
        </FormGroup>

        <FormGroup>
          <Label htmlFor="message">{isArabic ? 'الملاحظات *' : 'Your Feedback *'}</Label>
          <TextArea
            id="message"
            name="message"
            placeholder={isArabic 
              ? 'شارك ملاحظاتك واقتراحاتك...' 
              : 'Share your feedback and suggestions...'
            }
            value={formData.message}
            onChange={handleChange}
            disabled={loading}
            required
          />
        </FormGroup>

        <ButtonContainer>
          <SubmitButton type="submit" disabled={loading}>
            {loading ? (isArabic ? 'جاري الإرسال...' : 'Sending...') : (isArabic ? 'إرسال' : 'Submit')}
          </SubmitButton>
          <ResetButton type="button" onClick={handleReset} disabled={loading}>
            {isArabic ? 'إعادة تعيين' : 'Reset'}
          </ResetButton>
        </ButtonContainer>
      </Form>
    </FeedbackContainer>
  );
};

export default Feedback;
