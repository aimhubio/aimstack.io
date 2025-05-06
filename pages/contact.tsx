import React, { useState } from 'react';
import { Text, Container, Flex } from 'styles/foundations';
import Seo from 'components/SEO/SEO';
import { Button } from 'components/UIkit';

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Here you would normally send the data to your API
    // For now we'll just simulate a submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  const interestOptions = [
    "Live demo",
    "Pricing",
    "Partnerships",
  ];

  // Common styles for inputs and selects
  const inputStyles = {
    width: '100%',
    padding: '12px',
    borderRadius: '4px',
    border: 'none',
    fontSize: '16px',
    backgroundColor: 'white'
  };

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

  return (
    <>
      <Seo
        title="Contact Us | AimStack"
        description="Get in touch with the AimStack team. We're here to help with your ML experiment tracking needs."
      />
      <Container css={{ paddingTop: '120px'}}>
        <Text as="h1" size={8} css={{ marginBottom: '32px', textAlign: 'center' }}>
          Hello, how can we help you?
        </Text>

        <Flex direction="column" gap={6} css={{ maxWidth: '800px', margin: '0 auto' }}>
          <Text as="p" size={3} css={{ textAlign: 'center', marginBottom: '24px' }}>
            Choose the plan that fits your team — from personal projects to enterprise ML workflows.
            All plans include fast experiment tracking and a powerful UI.
          </Text>

          {submitted ? (
            <div css={{ textAlign: 'center', padding: '40px 0' }}>
              <Text as="h3" size={6} css={{ marginBottom: '16px', color: '$green800' }}>
                Thanks for reaching out!
              </Text>
              <Text as="p" size={3}>
                 We are looking forward to chatting soon. Someone from our team will reach out to you shortly.
              </Text>
              <Flex css={{ justifyContent: 'center', marginTop: '24px' }}>
                <Button
                  as="a"
                  variant="community"
                  size={2}
                  href="/blog"
                >
                  Check out our blog
                </Button>
                </Flex>
            </div>
          ) : (
            <div style={formAreaStyle}>
              <form onSubmit={handleSubmit} css={{ width: '100%' }}>
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
                      <div >
                        <label htmlFor="name" style={labelStyle}>
                          <Text size={2}>Name</Text>
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          // required
                          placeholder="Enter your name"
                          value={formData.name}
                          onChange={handleChange}
                          style={inputStyles}
                        />
                      </div>

                      <div >
                        <label htmlFor="company" style={labelStyle}>
                          <Text size={2}>Company</Text>
                        </label>
                        <input
                          id="company"
                          name="company"
                          type="text"
                          // required
                          placeholder="Enter where do you work"
                          value={formData.company}
                          onChange={handleChange}
                          style={inputStyles}
                        />
                      </div>

                      <div >
                        <label htmlFor="email" style={labelStyle}>
                          <Text size={2}>Email</Text>
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          // required
                          placeholder="Enter your email address"
                          value={formData.email}
                          onChange={handleChange}
                          style={inputStyles}
                        />
                      </div>
                    </Flex>

                    {/* Right Column */}
                    <Flex direction="column" gap={4} css={{ flex: 1 }}>
                      <div >
                        <label htmlFor="surname" style={labelStyle}>
                          <Text size={2}>Surname</Text>
                        </label>
                        <input
                          id="surname"
                          name="surname"
                          type="text"
                          // required
                          placeholder="Enter your surname"
                          value={formData.surname}
                          onChange={handleChange}
                          style={inputStyles}
                        />
                      </div>

                      <div >
                        <label htmlFor="role" style={labelStyle}>
                          <Text size={2}>Role</Text>
                        </label>
                        <input
                          id="role"
                          name="role"
                          type="text"
                          // required
                          placeholder="Enter your role"
                          value={formData.role}
                          onChange={handleChange}
                          style={inputStyles}
                        />
                      </div>

                      <div >
                        <label htmlFor="interestedIn" style={labelStyle}>
                          <Text size={2}>Interested In</Text>
                        </label>
                        <select
                          id="interestedIn"
                          name="interestedIn"
                          // required
                          value={formData.interestedIn}
                          onChange={handleChange}
                          style={inputStyles}
                        >
                          <option value="" disabled>Choose the option</option>
                          {interestOptions.map(option => (
                            <option key={option} value={option}>{option}</option>
                          ))}
                        </select>
                      </div>
                    </Flex>
                  </Flex>

                  {/* Comments field - spans full width */}
                  <div >
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
                      style={{...inputStyles, resize: 'vertical'}}
                    />
                  </div>

                  {/* Submit button - centered */}
                  <Flex css={{ justifyContent: 'center', marginTop: '8px' }}>
                    <Button
                      as="button"
                      type="submit"
                      variant="community"
                      size={2}
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
              </form>
            </div>
          )}
        </Flex>
      </Container>
    </>
  );
};

export default ContactUs;