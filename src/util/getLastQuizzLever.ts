export const getLastQuizLevel = async (lessonId: string): Promise<number> => {
  try {
    // Intentamos cargar varios nombres posibles (1 a 50)
    const maxChecks = 50
    let last = 0

    for (let i = 1; i <= maxChecks; i++) {
      const res = await fetch(`/lessons/lesson-${lessonId}/Quizz${i}.json`)

      if (res.ok) {
        last = i
      } else {
        break // cuando falla, ya no hay más quizzes
      }
    }

    return last
  } catch {
    return 0
  }
}
