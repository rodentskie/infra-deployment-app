import { notFound } from 'next/navigation';

interface Props {
  params: {
    type: string;
  };
}

const validTypes = ['live', 'non-live'] as const;
type ValidType = (typeof validTypes)[number];

export default function InfraTypePage({ params }: Props) {
  if (!validTypes.includes(params.type as ValidType)) {
    notFound();
  }

  return (
    <>
      <p>Hi</p>
    </>
  );
}
