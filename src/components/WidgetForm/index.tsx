import bugImageUrl from '../../assets/bug.svg'
import ideaImageUrl from '../../assets/idea.svg'
import thoughtImageUrl from '../../assets/thought.svg'
import { useState } from "react";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSuccessType } from './Steps/FeedbackSuccessType';

export const feedbackTypes = {
    BUG: {
        title: 'Problem',
        image: {
            source: bugImageUrl,
            alt:'image of an inset. click here if you found a bug in the app.'
        },
    },
    IDEA: {
        title: 'Idea',
        image: {
            source: ideaImageUrl,
            alt: 'image of a light bulb. click here if you have a suggestion to make our app better'
        },
    },
    OTHER: {
        title: 'Other',
        image: {
            source: thoughtImageUrl,
            alt:'image of a cloud of thinking. click here if you want to share your thoughts about our app'
        },
    }
}

export type FeedbackType = keyof typeof feedbackTypes

export function WidgetForm() {
    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
    const [feedbackSent, setFeedbackSent] = useState(false)
    function handleRestartFeedback(){
        setFeedbackSent(false)
        setFeedbackType(null)
    }
    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            {feedbackSent ? (
                <FeedbackSuccessType onFeedbackRestartRequested={handleRestartFeedback} />
            ) : (
                <>
                {!feedbackType ? (
                <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
            ): (
                <FeedbackContentStep 
                    feedbackType={feedbackType}
                    onFeedbackRestartRequested={handleRestartFeedback} 
                    onFeedbackSent={() => setFeedbackSent(true)}
                />
            )}
                </>
            )

            }
            <footer className="text-xs text-neutral-400">
                Made with ❤️ by <a className="underline underline-offset-2" href="rocketseat.com.br">Rocketseat</a> 
            </footer>

        </div>
    )
}