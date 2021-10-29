import { useForm, ValidationError } from '@formspree/react';
import Button from '../buttons/Button';
import Input from './Input';
import TextArea from './TextArea';

const ContactForm: React.FC = () => {
  const [{ submitting, succeeded, errors }, handleSubmit] = useForm('xyylyppy');

  if (succeeded) {
    <p>
      Thank you for your message! I&#39;ll get back to you as soon as possible.
    </p>;
  }

  return (
    <form
      className="flex flex-col items-center justify-center w-full space-y-4"
      onSubmit={handleSubmit}
    >
      <p className="self-start text-xl font-bold dark:text-gray-100">
        Get in touch!
      </p>
      <Input
        label="Email"
        placeholder="john@doe.com"
        id="email"
        type="email"
        name="email"
        required
      />
      <ValidationError prefix="Email" field="email" errors={errors} />
      <TextArea
        label="Message"
        placeholder="Your Message..."
        id="message"
        name="message"
        required
      />
      <ValidationError prefix="Message" field="message" errors={errors} />
      <Button type="submit" submitting={submitting}>
        Submit
      </Button>
    </form>
  );
};

export default ContactForm;
