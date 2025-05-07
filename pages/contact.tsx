import React, { useState } from 'react';
import { Text, Container, Flex } from 'styles/foundations';
import Seo from 'components/SEO/SEO';
import { Button } from 'components/UIkit';
import contactSeo from 'content/SeoData/contact';
import { styled } from '@stitches/react';

// Create styled versions of HTML elements
const StyledForm = styled('form', {});
const StyledDiv = styled('div', {});

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    company: '',
    role: '',
    email: '',
    interestedIn: '',
    comments: ''
  });
  const [formErrors, setFormErrors] = useState({
    name: false,
    surname: false,
    company: false,
    role: false,
    email: false,
    interestedIn: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [showValidation, setShowValidation] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    // Clear error for this field when user starts typing
    if (showValidation && formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: false
      });
    }
  };

  const validateForm = () => {
    const requiredFields = ['name', 'surname', 'company', 'role', 'email', 'interestedIn'];
    const errors: typeof formErrors = {
    name: false,
    surname: false,
    company: false,
    role: false,
    email: false,
    interestedIn: false
  };

    let isValid = true;

    requiredFields.forEach(field => {
      if (!formData[field]) {
        errors[field] = true;
        isValid = false;
      } else {
        errors[field] = false;
      }
    });

    // Additional email validation if needed
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = true;
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowValidation(true);
    setErrorMessage('');

    const isValid = validateForm();
    if (!isValid) return;

    setIsSubmitting(true);

    try {
      // Send form data to API route
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
      } else {
        setErrorMessage(data.message || 'Failed to send your message. Please try again later.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setErrorMessage('An unexpected error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const interestOptions = [
    "Live demo",
    "Pricing",
    "Partnerships",
  ];

  // Common styles for inputs and selects
  const getInputStyles = (fieldName) => ({
    width: '100%',
    padding: '12px',
    borderRadius: '4px',
    border: formErrors[fieldName] ? '2px solid #ff5555' : 'none',
    fontSize: '16px',
    backgroundColor: 'white',
    outline: formErrors[fieldName] ? 'none' : undefined
  });

  // Label style
  const labelStyle = {
    display: 'block',
    marginBottom: '8px',
    fontWeight: 500
  };

  // Form area background style
  const formAreaStyle = {
    backgroundColor: '#f7f9fc',
    borderRadius: '12px',
    padding: '24px',
  };

  // Error message style
  const errorMessageStyle = {
    color: '#ff5555',
    fontSize: '14px',
    marginTop: '4px'
  };

  return (
    <>
      <Seo {...contactSeo} />
      <Container css={{ paddingTop: '120px'}}>
        <Flex direction="column" gap={6} css={{ maxWidth: '800px', margin: '0 auto' }}>
          {!submitted && (
            <>
            <Text as="h1" size={8} css={{ marginBottom: '24px', textAlign: 'center' }}>
              Hello, how can we help you?
            </Text>

            <Text as="p" size={3} css={{ textAlign: 'center', marginBottom: '24px'}}>
              Choose the plan that fits your team — from personal projects to enterprise ML workflows.
              All plans include fast experiment tracking and a powerful UI.
            </Text>
          </>
          )}
          {submitted ? (
            <StyledDiv css={{ textAlign: 'center', padding: '40px 0' }}>
              <Text as="h1" size={8} css={{ marginBottom: '16px', color: '$green800' }}>
                Thanks for reaching out!
              </Text>
              <Text as="p" size={3}>
                We are looking forward to chatting soon. Someone from our team will reach out to you shortly.
              </Text>
              <Flex css={{ justifyContent: 'center', marginTop: '24px' }}>
                <Button
                  as="a"
                  variant="gradient"
                  size={3}
                  href="/blog"
                >
                  Check out our blog
                </Button>
              </Flex>
            </StyledDiv>
          ) : (
            <StyledDiv style={formAreaStyle}>
              {errorMessage && (
                <StyledDiv css={{
                  backgroundColor: '#ffeeee',
                  padding: '12px',
                  marginBottom: '16px',
                  borderRadius: '4px',
                  border: '1px solid #ffcccc'
                }}>
                  <Text size={2} css={{ color: '#ff5555' }}>{errorMessage}</Text>
                </StyledDiv>
              )}
              <StyledForm onSubmit={handleSubmit} css={{ width: '100%' }}>
                <Flex direction="column" gap={5}>
                  {/* Two-column layout */}
                  <Flex css={{
                    gap: '24px',
                    flexDirection: 'row',
                    '@media (max-width: 768px)': {
                      flexDirection: 'column'
                    }
                  }}>
                    {/* Left Column */}
                    <Flex direction="column" gap={4} css={{ flex: 1 }}>
                      <StyledDiv>
                        <label htmlFor="name" style={labelStyle}>
                          <Text size={2}>Name</Text>
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          placeholder="Enter your name"
                          value={formData.name}
                          onChange={handleChange}
                          style={getInputStyles('name')}
                        />
                        {formErrors.name && (
                          <div style={errorMessageStyle}>Please enter your name</div>
                        )}
                      </StyledDiv>

                      <StyledDiv>
                        <label htmlFor="company" style={labelStyle}>
                          <Text size={2}>Company</Text>
                        </label>
                        <input
                          id="company"
                          name="company"
                          type="text"
                          placeholder="Enter where do you work"
                          value={formData.company}
                          onChange={handleChange}
                          style={getInputStyles('company')}
                        />
                        {formErrors.company && (
                          <div style={errorMessageStyle}>Please enter your company</div>
                        )}
                      </StyledDiv>

                      <StyledDiv>
                        <label htmlFor="email" style={labelStyle}>
                          <Text size={2}>Email</Text>
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="Enter your email address"
                          value={formData.email}
                          onChange={handleChange}
                          style={getInputStyles('email')}
                        />
                        {formErrors.email && (
                          <div style={errorMessageStyle}>Please enter a valid email</div>
                        )}
                      </StyledDiv>
                    </Flex>

                    {/* Right Column */}
                    <Flex direction="column" gap={4} css={{ flex: 1 }}>
                      <StyledDiv>
                        <label htmlFor="surname" style={labelStyle}>
                          <Text size={2}>Surname</Text>
                        </label>
                        <input
                          id="surname"
                          name="surname"
                          type="text"
                          placeholder="Enter your surname"
                          value={formData.surname}
                          onChange={handleChange}
                          style={getInputStyles('surname')}
                        />
                        {formErrors.surname && (
                          <div style={errorMessageStyle}>Please enter your surname</div>
                        )}
                      </StyledDiv>

                      <StyledDiv>
                        <label htmlFor="role" style={labelStyle}>
                          <Text size={2}>Role</Text>
                        </label>
                        <input
                          id="role"
                          name="role"
                          type="text"
                          placeholder="Enter your role"
                          value={formData.role}
                          onChange={handleChange}
                          style={getInputStyles('role')}
                        />
                        {formErrors.role && (
                          <div style={errorMessageStyle}>Please enter your role</div>
                        )}
                      </StyledDiv>

                      <StyledDiv>
                        <label htmlFor="interestedIn" style={labelStyle}>
                          <Text size={2}>Interested In</Text>
                        </label>
                        <select
                          id="interestedIn"
                          name="interestedIn"
                          value={formData.interestedIn}
                          onChange={handleChange}
                          style={getInputStyles('interestedIn')}
                        >
                          <option value="" disabled>Choose the option</option>
                          {interestOptions.map(option => (
                            <option key={option} value={option}>{option}</option>
                          ))}
                        </select>
                        {formErrors.interestedIn && (
                          <div style={errorMessageStyle}>Please select an option</div>
                        )}
                      </StyledDiv>
                    </Flex>
                  </Flex>

                  {/* Comments field - spans full width */}
                  <StyledDiv>
                    <label htmlFor="comments" style={labelStyle}>
                      <Text size={2}>Comments</Text>
                    </label>
                    <textarea
                      id="comments"
                      name="comments"
                      placeholder="Enter your comments"
                      value={formData.comments}
                      onChange={handleChange}
                      rows={5}
                      style={{...getInputStyles('comments'), resize: 'vertical'}}
                    />
                  </StyledDiv>

                  {/* Submit button - centered */}
                  <Flex css={{ justifyContent: 'center', marginTop: '8px' }}>
                    <Button
                      as="button"
                      type="submit"
                      variant="gradient"
                      size={3}
                      disabled={isSubmitting}
                      css={{
                        paddingLeft: '36px',
                        paddingRight: '36px',
                        fontWeight: 600
                      }}
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit'}
                    </Button>
                  </Flex>
                </Flex>
              </StyledForm>
            </StyledDiv>
          )}
        </Flex>
      </Container>
    </>
  );
};

export default ContactUs;