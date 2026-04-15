
CREATE TABLE public.consultation_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  business_name TEXT,
  phone TEXT,
  email TEXT NOT NULL,
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.consultation_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit consultation form"
ON public.consultation_submissions
FOR INSERT
WITH CHECK (true);
