import { Button } from 'ui/atoms';
import type { FC } from 'react';

export const MyProjects: FC = () => (
	<>
		<article>
			<h3 className='text-4xl text-left'>
				{'PSOWNNs-CNN: A Computational Radiology for Breast Cancer Diagnosis Improvement Based on Image Processing Using Machine Learning Methods'.toUpperCase()}
			</h3>
			<p className='text-left mb-6'>11 May 2022</p>
			<p className='mb-1 text-left leading-18px last:mb-0'>
				Early diagnosis of breast cancer is an important component of breast
				cancer therapy. A variety of diagnostic platforms can provide valuable
				information regarding breast cancer patients, including image-based
				diagnostic techniques. However, breast abnormalities are not always easy
				to identify. Mammography, ultrasound, and thermography are some of the
				technologies developed to detect breast cancer. Using image processing
				and artificial intelligence techniques, the computer enables
				radiologists to identify chest problems more accurately. The purpose of
				this article was to review various approaches to detecting breast cancer
				using artificial intelligence and image processing. The authors present
				an innovative approach for identifying breast cancer using machine
				learning methods. Compared to current approaches, such as CNN, our
				particle swarm optimized wavelet neural network (PSOWNN) method appears
				to be relatively superior. The use of machine learning methods is
				clearly beneficial in terms of improved performance, efficiency, and
				quality of images, which are crucial to the most innovative medical
				applications. According to a comparison of the process’s 905 images to
				those of other illnesses, 98.6% of the disorders are correctly
				identified. In summary, PSOWNNs, therefore, have a specificity of 98.8%.
				Furthermore, PSOWNNs have a precision of 98.6%, which means that,
				despite the high number of women diagnosed with breast cancer, only 830
				(95.2%) are diagnosed. In other words, 95.2% of images are correctly
				classified. PSOWNNs are more accurate than other machine learning
				algorithms, SVM, KNN, and CNN.
			</p>
			<a className='mt-1' href='https://www.hindawi.com/journals/cin/2022/5667264/'>
				<Button>Read More</Button>
			</a>
		</article>
	</>
);
