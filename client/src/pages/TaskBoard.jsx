import React from "react";
import {
  Container,
  Button,
  ModalHeader,
  ModalDescription,
  ModalContent,
  ModalActions,
  Header,
  Image,
  Modal,
} from "semantic-ui-react";

export default function TaskBoard() {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Container>
        <Modal
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          open={open}
          trigger={<Button>Add Task</Button>}
        >
          <ModalHeader>Add Task</ModalHeader>
          <ModalContent image>
            <Image
              size="medium"
              src="/images/avatar/large/rachel.png"
              wrapped
            />
            <ModalDescription>
              <Header>Default Profile Image</Header>
              <p>
                Found the following gravatar image associated with your e-mail
                address.
              </p>
              <p>Is it okay to use this photo?</p>
            </ModalDescription>
          </ModalContent>
          <ModalActions>
            <Button color="black" onClick={() => setOpen(false)}>
              Nope
            </Button>
            <Button
              content="Yep, that's me"
              labelPosition="right"
              icon="checkmark"
              onClick={() => setOpen(false)}
              positive
            />
          </ModalActions>
        </Modal>
      </Container>
    </>
  );
}
